import { Component } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AccountService]
})
export class AppComponent {
  accounts:{name:string,status:string}[] = [];

  constructor(private accountService:AccountService){
    this.accounts = accountService.accounts;
  }
  
}
