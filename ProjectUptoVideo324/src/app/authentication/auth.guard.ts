import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthenticationService } from "./auth.service";
import { take, map } from "rxjs/operators";
import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
    
    constructor(private authService:AuthenticationService,private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
    boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        
        return this.authService.user.pipe(
            take(1),
            map( user => {
                const isAuth = !!user;
                if(isAuth){
                    return true;
                }
                return this.router.createUrlTree(['./auth']);
            })
        )
    }

}