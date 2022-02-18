import { Component } from '@angular/core';

@Component({
    selector:"app-servers",
    templateUrl: './servers.component.html'
})
export class ServersComponent{
    serverName: string = "TestServerName";
    servers = ['Server-1','Server-2'];
    onUpdateServerName(event:Event){
        console.log(event);
        this.serverName  = (<HTMLInputElement>event.target).value;
    }


    allowAddServer = false;
    serverCreationStatus = "No server is added";
    constructor(){
        //function(){ this.allowAddServer = true; } same as below
        setTimeout(()=>{this.allowAddServer = true;},3000);
    }

    showServerName : boolean = false;
    onServerCreation(){
        this.showServerName = true;
        this.serverCreationStatus = "New Server is added "+ this.serverName;
        this.servers.push(this.serverCreationStatus);
    }
}