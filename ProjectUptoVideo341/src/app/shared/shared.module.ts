import { NgModule } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { LoadingSpinningComponent } from "./loading-spinner.component";
import { PlaceHolderDirective } from "./placeholder/placeholder.directive";
import { RecipeDropDownDirective } from "./dropdown.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        AlertComponent,
        LoadingSpinningComponent,
        PlaceHolderDirective,
        RecipeDropDownDirective
    ],
    imports:[
        CommonModule
    ],
    exports:[
        AlertComponent,
        LoadingSpinningComponent,
        PlaceHolderDirective,
        RecipeDropDownDirective,
        CommonModule
    ],
    entryComponents:[AlertComponent]
})
export class SharedModule{}