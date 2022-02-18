import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent {
  
  constructor(private loggingService : LoggingService,private accountService : AccountService){ 
    this.accountService.statusChanged.subscribe((status:string)=>{
      alert("Status changed to "+status);
    });
   }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.onAccountAdded(accountName,accountStatus);
    //this.loggingService.logStatus(accountStatus);
  }
}
