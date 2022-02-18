import { Component } from '@angular/core';
import { RecipeModel } from './recipe.model';

@Component({
    selector:"recipes",
    templateUrl:"./recipes.component.html",
    styleUrls:["./recipes.component.css"]
})
export class RecipesComponent{
    currentItemSelected : RecipeModel;
    onItemRecipeSelectedInComponent(recipeSelected: RecipeModel){
        this.currentItemSelected = recipeSelected;
        console.log("received : RecipesComponent"+ recipeSelected);
    }
}