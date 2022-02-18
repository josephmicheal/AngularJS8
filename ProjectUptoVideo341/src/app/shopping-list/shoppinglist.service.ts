import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Subject } from "rxjs";

export class ShoppingListService {
    ingrediensChanged  = new Subject<Ingredient[]>();
    ingredients: Ingredient[];

    ingredientUnderEdit = new Subject<number>();

    constructor() {
        this.ingredients = [new Ingredient('Apple', 5),
        new Ingredient('Orange', 10)
        ];
    }

    getIngredients(){
        return this.ingredients;
    }

    getIngredientByIndex(index:number){
        return this.ingredients[index];
    }

    newingredientAdded(newIngredient: Ingredient) {
        this.ingredients.push(newIngredient);
        this.ingrediensChanged.next(this.ingredients);
    }

    existingIngredientUpdated(index:number,updatedIngredient: Ingredient) {
        this.ingredients[index] = updatedIngredient;
        this.ingrediensChanged.next(this.ingredients);
    }

    existingIngredientDeleted(index:number) {
        console.log("existingIngredientDeleted:"+index);
        this.ingredients.splice(index,1);
        this.ingrediensChanged.next(this.ingredients.slice());
    }

    newingredientsAdded(newIngredients: Ingredient[]) {
        this.ingredients.push(...newIngredients);
        this.ingrediensChanged.next(this.ingredients);
    }
}