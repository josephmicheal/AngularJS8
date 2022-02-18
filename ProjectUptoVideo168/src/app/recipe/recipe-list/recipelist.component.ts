import { Component, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: "recipe-list",
    templateUrl: "./recipelist.component.html",
    styleUrls: ["./recipelist.component.css"]
})
export class RecipeListComponent implements OnInit{
    recipes: RecipeModel[] = [];

    constructor(private recipeService : RecipeService,
        private router:Router,
        private activatedRoute:ActivatedRoute) {

    }

    ngOnInit(){
        this.recipes = this.recipeService.getRecipes();
    }

    createNewRecipe(){
        console.log("createNewRecipe");
        this.router.navigate(['new'],{relativeTo:this.activatedRoute});
    }
}