import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shoppinglist.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
    selector: "shopping-list-edit",
    templateUrl: "./shoppinglistedit.component.html",
    styleUrls: ["./shoppinglistedit.component.css"]
})
export class ShoppingListEditComponent {

    @ViewChild("f",{static:false}) ngForm :NgForm;
    subscribtionOfItem2Edit:Subscription;

    isEditMode:boolean = false;
    editIndex : number;
    editItem: Ingredient;

    constructor(private shoppingListService:ShoppingListService){      
    }

    ngOnInit(){
        this.subscribtionOfItem2Edit = this.shoppingListService.ingredientUnderEdit.subscribe(
            (index : number) => {
                console.log("inxdex:"+index);
                this.editIndex = index;
                this.isEditMode = true;
                this.editItem = this.shoppingListService.getIngredientByIndex(index);
                this.ngForm.setValue({
                    name : this.editItem.name,
                    amount : this.editItem.amount
                });
        });
    }

    onIngredientAdd(form:NgForm) {
        const ingredient = new Ingredient(form.value.name, form.value.amount);
        if(this.isEditMode){
            this.shoppingListService.existingIngredientUpdated(this.editIndex,ingredient);
        }else{
            this.shoppingListService.newingredientAdded(ingredient);
        }
        this.isEditMode = false;
        form.reset();
    }

    onIngredientDelete() {
        this.shoppingListService.existingIngredientDeleted(this.editIndex);
        this.onClear();
    }

    onClear(){
        this.isEditMode = false;
        this.ngForm.reset();
    }

    ngOnDestroy(): void {
        this.subscribtionOfItem2Edit.unsubscribe();
    }
}
