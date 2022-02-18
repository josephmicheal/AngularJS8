import { Component } from '@angular/core';
import { RecipeModel } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
    selector:"recipes",
    templateUrl:"./recipes.component.html",
    styleUrls:["./recipes.component.css"]
})
export class RecipesComponent{
    currentItemSelected : RecipeModel;

    constructor(private recipeService:RecipeService){
    }
}