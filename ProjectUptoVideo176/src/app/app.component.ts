import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {

  isUserActivated: boolean = false;
  userActivationSubscribtion : Subscription;
  constructor(private userService: UserService) { }

  ngOnInit() {
   this.userActivationSubscribtion =  this.userService.userActivationEmitter.subscribe((userACtivationFlag: boolean) => {
      this.isUserActivated = userACtivationFlag;
    });
  }

  ngOnDestroy(): void {
    this.userActivationSubscribtion.unsubscribe();
  }
}
