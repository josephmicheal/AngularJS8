import { Injectable, EventEmitter } from "@angular/core";
import { RecipeModel } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";

@Injectable()
export class RecipeService{
    recipes: RecipeModel[] = [];
    selectedRecipe = new EventEmitter<RecipeModel>();
    constructor(private shoppingListService:ShoppingListService) {
        this.recipes = [
            new RecipeModel('Rice Flour', 'Fine Grained Rice Flour', 'https://static01.nyt.com/images/2015/01/28/dining/28KITCHEN1/28KITCHEN1-articleLarge.jpg',
            [new Ingredient("Rice",1),new Ingredient("Water",2)]),
            new RecipeModel('Atta Flour', 'Fine Grained Atta Flour', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg',
            [new Ingredient("Meat",1),new Ingredient("French Fries",2)])
        ];
    }

    getRecipes(){
        return this.recipes;
    }

    getRecipe(id:number){
        return this.recipes[id];
    }

    addRecipeIngredients2ShoppingList(recipe:RecipeModel){
        this.shoppingListService.newingredientsAdded(recipe.ingredients)
    }
}