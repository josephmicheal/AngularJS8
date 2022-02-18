import { NgModule } from "@angular/core";
import { ShoppingListService } from "./shopping-list/shoppinglist.service";
import { RecipeService } from "./recipe/recipe.service";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./authentication/auth.interceptor.service";

@NgModule({
    providers:[ShoppingListService,RecipeService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}],
})
export class CoreModule{}