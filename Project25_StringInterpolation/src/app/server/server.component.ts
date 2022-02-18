import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  serverId: number = 8;
  serverStatus: string = "StAntony";

  getServerStatus(){
    return this.serverStatus;
  }

}
