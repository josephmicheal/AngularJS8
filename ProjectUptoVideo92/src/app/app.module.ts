import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipe/recipes.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipedetails.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipeitem.component';
import { RecipeListComponent } from './recipe/recipe-list/recipelist.component';
import { ShoppingListComponent } from './shopping-list/shoppinglist.component';
import { ShoppingListEditComponent } from './shopping-list/shopping-list-edit/shoppinglistedit.component';
import { DirectivesTestComponent } from './directives-test/directives-test.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DirectivesTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
