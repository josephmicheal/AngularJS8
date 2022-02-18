import { NgModule } from "@angular/core";
import { AuthenticationComponent } from "./auth.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations:[AuthenticationComponent],
    imports:[FormsModule,SharedModule,CommonModule, 
        RouterModule.forChild([{ path: "", component: AuthenticationComponent }])]
})
export class AuthModule{}