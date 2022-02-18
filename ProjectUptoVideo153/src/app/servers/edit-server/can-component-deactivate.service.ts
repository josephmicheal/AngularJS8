import { Observable } from "rxjs";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

export interface CanComponentDeactivateService{
    canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeativateGuardService implements CanDeactivate<CanComponentDeactivateService>{ 
canDeactivate(component:CanComponentDeactivateService,
                currentRoute:ActivatedRouteSnapshot,
                currentState:RouterStateSnapshot,
                nextState?:RouterStateSnapshot):
                Observable<boolean> | Promise<boolean> | boolean{
                    return component.canDeactivate();
                }
}