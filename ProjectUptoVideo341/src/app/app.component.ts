import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService:AuthenticationService,private logService:LoggingService){}
  
  ngOnInit(): void {
    this.authService.autoLogin();
    this.logService.printLog("AppComponent...");
  }
}
