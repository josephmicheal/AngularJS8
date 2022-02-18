import { Component, Input, OnInit } from '@angular/core';
import { RecipeModel } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: "recipe-details",
    templateUrl: "./recipedetails.component.html",
    styleUrls: ["./recipedetails.component.css"]
})
export class RecipeDetailsComponent implements OnInit {
    recipe: RecipeModel;
    id: number;

    constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute,private router:Router) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.recipe = this.recipeService.getRecipe(params['id']);
            this.id = +params['id'];
        });
    }
    addEditRecipe(){
        console.log("this.id"+this.id);
        //this.router.navigate(['edit'],{relativeTo:this.activatedRoute});
       this.router.navigate(['../',this.id,'edit'],{relativeTo:this.activatedRoute});
    }

    addIngredients2ShoppingList() {
        this.recipeService.addRecipeIngredients2ShoppingList(this.recipe);
    }

}