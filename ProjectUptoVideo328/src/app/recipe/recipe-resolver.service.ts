import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { RecipeModel } from "./recipe.model";
import { Injectable } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { RecipeService } from "./recipe.service";


@Injectable({providedIn:'root'})
export class RecipeResolver implements Resolve<RecipeModel[]>{
constructor(private dataStorageService:DataStorageService,private recipeService:RecipeService){}

resolve(activatedRouteSnapshot:ActivatedRouteSnapshot,routerStateSnapshot:RouterStateSnapshot){
    const recipes = this.recipeService.getRecipes();
    if(recipes.length ==0){
        return this.dataStorageService.fetchRecipes();
    }else{
        return recipes;
    }
    
}

}