import { NgModule } from "@angular/core";
import { RouterModule, PreloadAllModules } from "@angular/router";

const routes = [
    { path: "", redirectTo: "/recipes", pathMatch: 'full' },
    {path: "recipes", loadChildren: () => import('./recipe/recipe.module').then(m => m.RecipeModule)},
    { path: "shopping-list", loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppinglistModule) },
    { path: "auth", loadChildren: () => import('./authentication/auth.module').then(m => m.AuthModule) }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
    exports: [RouterModule]
})
export class AppRoutingModule {}