import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { UsersComponent } from "./users/users.component";
import { UserComponent } from "./users/user/user.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuardService } from "./auth-guard.service";
import { CanDeativateGuardService } from "./servers/edit-server/can-component-deactivate.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolverDynamicDataService } from "./servers/server/server-resolver-dynamic-data.service";


const appRoutes : Routes =[
    {path:"",component:HomeComponent},
    {path:"servers",component:ServersComponent,canActivateChild:[AuthGuardService],
        children:[                
          {path:":id",component:ServerComponent,resolve:{serverResolver:ServerResolverDynamicDataService}},
          {path:":id/edit",component:EditServerComponent,canDeactivate:[CanDeativateGuardService]}]},
    {path:"users",component:UsersComponent,
        children:[ 
          {path:":id/:name",component:UserComponent}]},
    //  {path:"page-not-found",component:PageNotFoundComponent},
    //  {path:"**",redirectTo:"page-not-found"} 
    {path:"error-page",component:ErrorPageComponent,data:{error:"Page Not Found!"}},
    {path:"**",redirectTo:"error-page"} 
    ];
@NgModule({
imports:[RouterModule.forRoot(appRoutes,{useHash:true})],
exports:[RouterModule]
})
export class AppRoutingModule{

}