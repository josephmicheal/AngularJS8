import { Component, Input, EventEmitter, Output } from '@angular/core';
import { RecipeModel } from '../recipe.model';


@Component({
    selector:"recipe-item",
    templateUrl:"./recipeitem.component.html",
    styleUrls:["./recipeitem.component.css"]
})
export class RecipeItemComponent{

    @Input('currentRecipe') currentRecipeItem:RecipeModel;

    @Output() itemSelected = new EventEmitter<void>();

    onSelectAnItem(){
        this.itemSelected.emit();
        console.log("emitted : RecipeItemComponent");
    }

}