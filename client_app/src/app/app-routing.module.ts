import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OverviewComponent } from "./components/overview/overview.component";
import { ViewRecipeComponent } from "./components/view-recipe/view-recipe.component";
import { CreateRecipeComponent } from "./components/create-recipe/create-recipe.component";

const routes: Routes = [
  { path: "", component: OverviewComponent },
  { path: "view/:id", component: ViewRecipeComponent },
  { path: "create", component: CreateRecipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}