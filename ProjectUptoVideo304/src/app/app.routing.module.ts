import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipe/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shoppinglist.component";
import { RecipeStartComponent } from "./recipe/recipe-start/recipe-start.component";
import { RecipeDetailsComponent } from "./recipe/recipe-details/recipedetails.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";
import { RecipeResolver } from "./recipe/recipe-resolver.service";
import { AuthenticationComponent } from "./authentication/auth.component";
import { AuthGuard } from "./authentication/auth.guard";



const routes = [
    { path: "", redirectTo: "/recipes", pathMatch: 'full' },
    {
        path: "recipes", component: RecipesComponent,canActivate : [AuthGuard],
        children: [
            { path: "", component: RecipeStartComponent },
            { path: "new", component: RecipeEditComponent },
            { path: ":id", component: RecipeDetailsComponent, resolve:[RecipeResolver] },
            { path: ":id/edit", component: RecipeEditComponent, resolve:[RecipeResolver] }
        ]
    },
    { path: "shopping-list", component: ShoppingListComponent },
    { path: "auth", component: AuthenticationComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}