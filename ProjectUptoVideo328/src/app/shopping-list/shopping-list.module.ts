import { NgModule } from "@angular/core";
import { ShoppingListComponent } from "./shoppinglist.component";
import { ShoppingListEditComponent } from "./shopping-list-edit/shoppinglistedit.component";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations:[
        ShoppingListComponent,
        ShoppingListEditComponent
    ],
    imports:[
        FormsModule,
        RouterModule.forChild([{ path: "shopping-list", component: ShoppingListComponent }]),
        SharedModule
    ]
})
export class ShoppinglistModule{}