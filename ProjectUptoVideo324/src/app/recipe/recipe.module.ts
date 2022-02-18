import { RecipeListComponent } from "./recipe-list/recipelist.component";
import { RecipesComponent } from "./recipes.component";
import { RecipeStartComponent } from "./recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeDetailsComponent } from "./recipe-details/recipedetails.component";
import { RecipeItemComponent } from "./recipe-item/recipeitem.component";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { RecipeRoutingModule } from "./recipe.routing.module";

@NgModule({
    declarations:[
        RecipesComponent,
        RecipeStartComponent,
        RecipeEditComponent,
        RecipeDetailsComponent,
        RecipeItemComponent,
        RecipeListComponent
    ],
    imports:[
        RouterModule,ReactiveFormsModule,CommonModule,RecipeRoutingModule
    ]
})
export class RecipeModule{}