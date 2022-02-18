import { Component, OnInit, OnDestroy } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
    selector: "recipe-list",
    templateUrl: "./recipelist.component.html",
    styleUrls: ["./recipelist.component.css"]
})
export class RecipeListComponent implements OnInit,OnDestroy{
    recipes: RecipeModel[] = [];
    reciepesChangedRef : Subscription;

    constructor(private recipeService : RecipeService,
        private router:Router,
        private activatedRoute:ActivatedRoute) {

    }

    ngOnInit(){
        this.recipes = this.recipeService.getRecipes();

      this.reciepesChangedRef =  this.recipeService.reciepesChanged.subscribe((updatedRecipes : RecipeModel[]) =>{
            this.recipes = updatedRecipes;
        });
    }

    createNewRecipe(){
        console.log("createNewRecipe");
        this.router.navigate(['new'],{relativeTo:this.activatedRoute});
    }

    ngOnDestroy(){
        this.reciepesChangedRef.unsubscribe();
    }
}