import { Component, Input } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
    selector: "recipe-details",
    templateUrl: "./recipedetails.component.html",
    styleUrls: ["./recipedetails.component.css"]
})
export class RecipeDetailsComponent {

    @Input() recipe: RecipeModel;
}