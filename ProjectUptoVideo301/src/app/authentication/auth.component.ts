import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthenticationService } from "./auth.service";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

@Component({
    selector: 'auth',
    templateUrl: '/auth.component.html'
})
export class AuthenticationComponent {

    constructor(private authService: AuthenticationService,private router:Router) { }

    isLoginMode = false;
    isLoading = false;
    error:string;

    switchModeLoginOrSignUp() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(authForm: NgForm) {
        console.log(authForm);

        if (!authForm.valid) {
            return;
        }

        let authResponse:Observable<any>;
        this.isLoading = true;
        const email = authForm.value.email;
        const pass = authForm.value.password;
        console.log(email+":"+pass);

        if (!this.isLoginMode) {
            authResponse = this.authService.signUp(email, pass);
        }else{
            authResponse = this.authService.signIn(email, pass);
        }

        authResponse.subscribe(responseData => {
            console.log(responseData);
            this.isLoading = false;
            this.error = null;
            this.router.navigate(['/recipes']);
        }, errorMsg => {
            console.log(errorMsg);
            this.error = errorMsg;
            this.isLoading = false;
        });            
    }
}