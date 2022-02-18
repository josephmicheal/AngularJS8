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
import { CustomeAttributeDirective } from './custom-directive/custom-attribute-directive';
import { MyUpdatedCustomAttributeDirectiveDirective } from './custom-directive/my-updated-custom-attribute-directive.directive';
import { MyUpdatedCustomAttributeEventDirective } from './custom-directive/my-updated-custom-attribute-event-directive.directive';
import { MyUpdatedCustomAttributeEventHostbindingDirective } from './custom-directive/my-updated-custom-attribute-event-hostbindingdirective.directive';
import { MyCustomAttributeDynamicValueDirective } from './custom-directive/my-custom-attribute-dynamicvalue-directive';
import { MyCustomStructuralUnlessDirective } from './custom-directive/my-custom-structural-unless-directive';
import { RecipeDropDownDirective } from './shared/dropdown.directive';
import { ShoppingListService } from './shopping-list/shoppinglist.service';
import { AppRoutingModule } from './app.routing.module';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeDropDownDirective,
    MyCustomStructuralUnlessDirective,
    MyCustomAttributeDynamicValueDirective,
    MyUpdatedCustomAttributeEventHostbindingDirective,
    MyUpdatedCustomAttributeEventDirective,
    MyUpdatedCustomAttributeDirectiveDirective,
    CustomeAttributeDirective,
    HeaderComponent,
    RecipesComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    RecipeListComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
    DirectivesTestComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers:[ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

