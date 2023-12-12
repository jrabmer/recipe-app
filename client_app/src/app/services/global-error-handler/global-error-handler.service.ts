import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, NgZone } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ErrorModalComponent } from "../../components/error-modal/error-modal.component";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    public dialog: MatDialog,
    private zone: NgZone
  ) {}

  handleError(error: any) {
    // Check if it's an error from an HTTP response
    if (!(error instanceof HttpErrorResponse)) {
      error = error.rejection; // get the error object
    }

    if (error.status == 0) {
      error.error = "The server could not be reached or an unknown error occured"
    }

    this.zone.run(() =>
      this.openDialog(
        error.error || 'Undefined client error',
        error?.status)
    );

    return error;
  }

  openDialog(message: string, status?: number): void {
    const dialogRef = this.dialog.open(ErrorModalComponent, {
      data: {message, status},
      autoFocus: false
    });
  }
}