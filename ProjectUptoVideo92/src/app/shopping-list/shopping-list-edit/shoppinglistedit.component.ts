import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
    selector: "shopping-list-edit",
    templateUrl: "./shoppinglistedit.component.html",
    styleUrls: ["./shoppinglistedit.component.css"]
})
export class ShoppingListEditComponent {
    @ViewChild('ingredientname', { static: true }) name: ElementRef;
    @ViewChild('ingredientamount', { static: true }) amount: ElementRef;

    @Output('ingredientAdded') ingredientAdd = new EventEmitter<Ingredient>();

    onIngredientAdd() {
        this.ingredientAdd.emit(new Ingredient(this.name.nativeElement.value, this.amount.nativeElement.value));
    }
}