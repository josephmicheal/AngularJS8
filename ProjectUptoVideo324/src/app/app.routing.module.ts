import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list/shoppinglist.component";
import { AuthenticationComponent } from "./authentication/auth.component";

const routes = [
    { path: "", redirectTo: "/recipes", pathMatch: 'full' },
    { path: "shopping-list", component: ShoppingListComponent },
    { path: "auth", component: AuthenticationComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}