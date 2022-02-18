import { RecipesComponent } from "./recipes.component";
import { AuthGuard } from "../authentication/auth.guard";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailsComponent } from "./recipe-details/recipedetails.component";
import { RecipeResolver } from "./recipe-resolver.service";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

const recipesRoutes = [{
    path: "", component: RecipesComponent,canActivate : [AuthGuard],
    children: [
        { path: "", component: RecipeStartComponent },
        { path: "new", component: RecipeEditComponent },
        { path: ":id", component: RecipeDetailsComponent, resolve:[RecipeResolver] },
        { path: ":id/edit", component: RecipeEditComponent, resolve:[RecipeResolver] }
    ]
}];
@NgModule({
    imports:[RouterModule.forChild(recipesRoutes)],
    exports:[RouterModule]
})
export class RecipeRoutingModule{}