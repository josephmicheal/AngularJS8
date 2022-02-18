import { Component, ComponentFactoryResolver, ViewChild, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthenticationService } from "./auth.service";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { AlertComponent } from "../shared/alert/alert.component";
import { PlaceHolderDirective } from "../shared/placeholder/placeholder.directive";

@Component({
    selector: 'auth',
    templateUrl: '/auth.component.html'
})
export class AuthenticationComponent implements OnDestroy{


    constructor(private authService: AuthenticationService,private router:Router,private componentFactoryResolver:ComponentFactoryResolver) { }

    isLoginMode = false;
    isLoading = false;
    error:string;
    @ViewChild(PlaceHolderDirective, {static:false}) alertHost:PlaceHolderDirective;
    private closeSubscription :Subscription;

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
            this.showErrorAlert(errorMsg)
            this.isLoading = false;
        });            
    }

    private showErrorAlert(message:string){
        const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
        const hostViewContainerRef = this.alertHost.viewContainerRef;
        hostViewContainerRef.clear();
        
        const componentRef = hostViewContainerRef.createComponent(alertCmpFactory);
        componentRef.instance.message = message;

        this.closeSubscription = componentRef.instance.close.subscribe(() =>{
            this.closeSubscription.unsubscribe();        
            hostViewContainerRef.clear();
        });
    }

    ngOnDestroy(): void {
        if(this.closeSubscription){
            this.closeSubscription.unsubscribe();
        }
    }

    errorHandled(){
        this.error = null;
    }
}