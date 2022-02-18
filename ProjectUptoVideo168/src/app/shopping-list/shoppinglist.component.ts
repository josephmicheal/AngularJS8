import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shoppinglist.service';

@Component({
    selector: "shopping-list",
    templateUrl: "./shoppinglist.component.html",
    styleUrls: ["./shoppinglist.component.css"]    
})
export class ShoppingListComponent implements OnInit{
    ingredients: Ingredient[];
    constructor(private shoppingListService:ShoppingListService){
   
    }
    ngOnInit(){
        this.ingredients = this.shoppingListService.getIngredients();
        this.shoppingListService.ingrediensChanged.subscribe((updatedIngredients: Ingredient[])=>{
            this.ingredients = updatedIngredients;
            console.log("emitted now");
        });
    }
}