import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DirectivesTestComponent } from './directives-test/directives-test.component';
import { CustomeAttributeDirective } from './custom-directive/custom-attribute-directive';
import { MyUpdatedCustomAttributeDirectiveDirective } from './custom-directive/my-updated-custom-attribute-directive.directive';
import { MyUpdatedCustomAttributeEventDirective } from './custom-directive/my-updated-custom-attribute-event-directive.directive';
import { MyUpdatedCustomAttributeEventHostbindingDirective } from './custom-directive/my-updated-custom-attribute-event-hostbindingdirective.directive';
import { MyCustomAttributeDynamicValueDirective } from './custom-directive/my-custom-attribute-dynamicvalue-directive';
import { MyCustomStructuralUnlessDirective } from './custom-directive/my-custom-structural-unless-directive';
import { AppRoutingModule } from './app.routing.module';
import { RecipeModule } from './recipe/recipe.module';
import { ShoppinglistModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';
import { AuthModel } from './authentication/auth.model';


@NgModule({
  declarations: [
    AppComponent,
    MyCustomStructuralUnlessDirective,
    MyCustomAttributeDynamicValueDirective,
    MyUpdatedCustomAttributeEventHostbindingDirective,
    MyUpdatedCustomAttributeEventDirective,
    MyUpdatedCustomAttributeDirectiveDirective,
    CustomeAttributeDirective,
    HeaderComponent,
    DirectivesTestComponent
  ],
  imports: [ 
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RecipeModule,
    ShoppinglistModule,
    SharedModule,
    CoreModule,
    AuthModel
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

