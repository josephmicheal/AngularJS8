import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeModel } from '../recipe.model';

@Component({
    selector: "recipe-list",
    templateUrl: "./recipelist.component.html",
    styleUrls: ["./recipelist.component.css"]
})
export class RecipeListComponent {
    recipes: RecipeModel[] = [];

    @Output() recipeSelected = new EventEmitter<RecipeModel>();

    constructor() {
        this.recipes = [
            new RecipeModel('Maida Flour', 'Fine Grained Maida Flour', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg'),
            new RecipeModel('Atta Flour', 'Fine Grained Atta Flour', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg')
        ];
    }

    onItemSelection(recipe:RecipeModel) {
        this.recipeSelected.emit(recipe);
        console.log(recipe);
    }
}