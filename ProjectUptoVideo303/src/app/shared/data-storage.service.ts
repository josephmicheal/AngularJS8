import { Injectable } from "@angular/core";
import { RecipeService } from "../recipe/recipe.service";
import { HttpClient, HttpParams } from "@angular/common/http";
import { RecipeModel } from "../recipe/recipe.model";
import { map, tap, take, exhaustMap } from "rxjs/operators";
import { AuthenticationService } from "../authentication/auth.service";

@Injectable({
    providedIn: "root"
})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthenticationService) { }

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http.put("https://myrecipeproject-28619.firebaseio.com/recipes.json", recipes)
            .subscribe((responseData) => {
                console.log(responseData);
            });
    }

    fetchRecipes() {

      return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                return this.http.get<RecipeModel[]>
                ("https://myrecipeproject-28619.firebaseio.com/recipes.json",
                {params : new HttpParams().set('auth',user.token)})
            }), map(responseDataRecipes => {
                return responseDataRecipes.map(recipe => {
                    return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
                })
            }),
            tap((responseData) => {
                console.log(responseData);
                this.recipeService.setRecipes(responseData);
            }))
    }


}