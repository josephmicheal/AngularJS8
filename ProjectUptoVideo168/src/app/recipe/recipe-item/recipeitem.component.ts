import { Component, Input} from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe.service';


@Component({
    selector:"recipe-item",
    templateUrl:"./recipeitem.component.html",
    styleUrls:["./recipeitem.component.css"]
})
export class RecipeItemComponent{

    constructor(private recipeService:RecipeService){
        
    }

    @Input('currentRecipe') currentRecipeItem:RecipeModel;
    @Input('recipeIndex') recipeIndex: number;

    onSelectAnItem(){
        this.recipeService.selectedRecipe.emit(this.currentRecipeItem);
    }

}