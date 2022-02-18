import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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
import { RecipeService } from './recipe/recipe.service';
import { AuthenticationComponent } from './authentication/auth.component';
import { LoadingSpinningComponent } from './shared/loading-spinner.component';
import { AuthInterceptorService } from './authentication/auth.interceptor.service';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceHolderDirective } from './shared/placeholder/placeholder.directive';
import { RecipeModule } from './recipe/recipe.module';


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
    ShoppingListComponent,
    ShoppingListEditComponent,
    DirectivesTestComponent,
    AuthenticationComponent,
    LoadingSpinningComponent,
    PlaceHolderDirective,
    AlertComponent
  ],
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecipeModule
  ],
  providers:[ShoppingListService,RecipeService,{provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}],
  bootstrap: [AppComponent],
  entryComponents:[AlertComponent]
})
export class AppModule { }

