import { CanActivate, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateChild } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuardService implements CanActivate,CanActivateChild{

    constructor(private router:Router,private authService:AuthService){}

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        boolean | Observable<boolean> | Promise<boolean> {
            return this.canActivate(route,state)
        }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
        boolean | Observable<boolean> | Promise<boolean> {
            console.log('canActivate :'+this.authService.isAuthenticated());
        return this.authService.isAuthenticated()
                .then((authenticated:boolean)=>
                {
                    console.log('authenticated :'+authenticated);
                    if(authenticated){
                        return true;
                    }else{
                        this.router.navigate(['/']);
                    }
        });
    }
}