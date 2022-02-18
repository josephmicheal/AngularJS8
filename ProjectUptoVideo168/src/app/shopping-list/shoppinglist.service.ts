import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
    ingrediensChanged  = new EventEmitter<Ingredient[]>();
    ingredients: Ingredient[];
    constructor() {
        this.ingredients = [new Ingredient('Apple', 5),
        new Ingredient('Orange', 10)
        ];
    }

    getIngredients(){
        return this.ingredients;
        console.log(this.ingredients);
    }

    newingredientAdded(newIngredient: Ingredient) {
        console.log(this.ingredients);
        this.ingredients.push(newIngredient);
        this.ingrediensChanged.emit(this.ingredients);
    }

    newingredientsAdded(newIngredients: Ingredient[]) {
        console.log(this.ingredients);
        this.ingredients.push(...newIngredients);
        this.ingrediensChanged.emit(this.ingredients);
    }
}