import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  

  constructor(private serversService: ServersService,private activatedRoute:ActivatedRoute,private router:Router) { 
    console.log("ServerComponent initialized");
  }

  ngOnInit() {
    // const serverId = this.activatedRoute.snapshot.params['id'];
    // this.server = this.serversService.getServer(+serverId);    
    // this.activatedRoute.params.subscribe((params:Params)=>{
    //   this.server = this.serversService.getServer(+params['id']);  
    // });   
    // console.log("ServerComponent ngInit....");
    // this.server = this.activatedRoute.snapshot.data['serverResolver'];
    // console.log(this.activatedRoute.snapshot.data['serverResolver']);

    this.activatedRoute.data.subscribe((data:Data)=>{
      console.log('ServerComponent ngOnInit subscribe');
      console.log(data['serverResolver']);
      this.server = data['serverResolver'];
    });
    
  }

  onEdit(){
     // this.router.navigate(['/servers',this.server.id,'edit']);
      this.router.navigate(['edit'],{relativeTo : this.activatedRoute,queryParamsHandling:'preserve'});
  }

}
