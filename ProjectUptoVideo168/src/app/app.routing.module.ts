import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipe/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shoppinglist.component";
import { RecipeStartComponent } from "./recipe/recipe-start/recipe-start.component";
import { RecipeDetailsComponent } from "./recipe/recipe-details/recipedetails.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";



const routes = [
    { path: "", redirectTo: "/recipes", pathMatch: 'full' },
    {
        path: "recipes", component: RecipesComponent,
        children: [
            { path: "", component: RecipeStartComponent },
            { path: "new", component: RecipeEditComponent },
            { path: ":id", component: RecipeDetailsComponent },
            { path: ":id/edit", component: RecipeEditComponent }
        ]
    },
    { path: "shopping-list", component: ShoppingListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}