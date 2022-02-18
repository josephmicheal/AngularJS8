import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";
import { Injectable, OnDestroy } from "@angular/core";

interface ServerModel{
    id:number;
    name:string;
    status:string
}

@Injectable()
export class ServerResolverDynamicDataService implements Resolve<ServerModel>,OnDestroy{
    ngOnDestroy(): void {
        console.log("ServerResolverDynamicDataService ngOnDestroy");
    }

    constructor(private serversService:ServersService){
        console.log("ServerResolverDynamicDataService constructor");
    }

    resolve(activatedRouteSnapshot: ActivatedRouteSnapshot, routerStateSnapshot: 
        RouterStateSnapshot): ServerModel | Observable<ServerModel> | Promise<ServerModel> {
            console.log('ServerResolverDynamicDataService resolve:'+activatedRouteSnapshot.params['id']);
        return this.serversService.getServer(+activatedRouteSnapshot.params['id']);
    }

}