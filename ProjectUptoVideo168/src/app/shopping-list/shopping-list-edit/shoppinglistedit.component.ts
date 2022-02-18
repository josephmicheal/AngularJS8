import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';

@Component({
    selector: "shopping-list-edit",
    templateUrl: "./shoppinglistedit.component.html",
    styleUrls: ["./shoppinglistedit.component.css"]
})
export class ShoppingListEditComponent {
    constructor(private shoppingListService:ShoppingListService){

    }
    @ViewChild('ingredientname', { static: true }) name: ElementRef;
    @ViewChild('ingredientamount', { static: true }) amount: ElementRef;


    onIngredientAdd() {
        this.shoppingListService.newingredientAdded(
            new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
    }
}