import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';
import { Subscription } from 'rxjs';
import { LoggingService } from '../logging.service';

@Component({
    selector: "shopping-list",
    templateUrl: "./shoppinglist.component.html",
    styleUrls: ["./shoppinglist.component.css"],
    providers:[LoggingService]
})
export class ShoppingListComponent implements OnInit,OnDestroy{

    ingredients: Ingredient[];
    ingredientsSubscribtion :Subscription;

    constructor(private shoppingListService:ShoppingListService,private logService:LoggingService){
   
    }
    ngOnInit(){
        this.ingredients = this.shoppingListService.getIngredients();
        this.ingredientsSubscribtion = this.shoppingListService.ingrediensChanged.subscribe((updatedIngredients: Ingredient[])=>{
            this.ingredients = updatedIngredients;
            console.log("emitted now");
        });

        this.logService.printLog("ShoppingList...");
    }

    onEditItem(ingredientIndex:number){
        this.shoppingListService.ingredientUnderEdit.next(ingredientIndex);
    }

    ngOnDestroy(): void {
        this.ingredientsSubscribtion.unsubscribe();
    }
}