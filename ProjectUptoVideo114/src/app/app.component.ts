import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  activeUsers : string [];
  inactiveUsers : string [];

  constructor(private userService: UserService) {
    this.activeUsers = userService.activeUsers;
    this.inactiveUsers = userService.inactiveUsers;

    userService.countActiveEmitter.subscribe((countActiveNow:number)=>{
      alert("Active count increased "+ countActiveNow);
    });

    userService.counterInActiveEmitter.subscribe((countInActiveNow:number)=>{
      alert("InActive count increased "+ countInActiveNow);
    });
  }
}
