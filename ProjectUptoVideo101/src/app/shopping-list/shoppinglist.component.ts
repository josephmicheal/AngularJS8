import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
    selector: "shopping-list",
    templateUrl: "./shoppinglist.component.html",
    styleUrls: ["./shoppinglist.component.css"]
})
export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Orange', 10)
    ];

    newingredientAdded(newIngredient:Ingredient){
        this.ingredients.push(newIngredient);
    }
}