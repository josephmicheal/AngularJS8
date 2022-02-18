import { Injectable, EventEmitter } from "@angular/core";
import { RecipeModel } from "./recipe.model";
import { ShoppingListService } from "../shopping-list/shoppinglist.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{
    recipes: RecipeModel[] = [];
    reciepesChanged  = new Subject<RecipeModel[]>();


    constructor(private shoppingListService:ShoppingListService) {
        // this.recipes = [
        //     new RecipeModel('Rice Flour', 'Fine Grained Rice Flour', 'https://static01.nyt.com/images/2015/01/28/dining/28KITCHEN1/28KITCHEN1-articleLarge.jpg',
        //     [new Ingredient("Rice",1),new Ingredient("Water",2)]),
        //     new RecipeModel('Atta Flour', 'Fine Grained Atta Flour', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/8/6/0/WU2301_Four-Cheese-Pepperoni-Pizzadilla_s4x3.jpg.rend.hgtvcom.826.620.suffix/1565115622965.jpeg',
        //     [new Ingredient("Meat",1),new Ingredient("French Fries",2)])
        // ];

        this.recipes = [];
    }

    getRecipes(){
        return this.recipes;
    }

    setRecipes(recipes:RecipeModel[]){
        this.recipes = recipes;
        this.reciepesChanged.next(this.recipes.slice());
    }

    getRecipe(id:number){
        return this.recipes[id];
    }

    addRecipeIngredients2ShoppingList(recipe:RecipeModel){
        this.shoppingListService.newingredientsAdded(recipe.ingredients)
    }

    addNewRecipe(newRecipe:RecipeModel){
        this.recipes.push(newRecipe);
        this.reciepesChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number,updatedRecipe:RecipeModel){
        this.recipes[index] = updatedRecipe;
        this.reciepesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index:number){
        console.log("delete:"+index);
        this.recipes.splice(index,1);
        this.reciepesChanged.next(this.recipes.slice());
    }
}