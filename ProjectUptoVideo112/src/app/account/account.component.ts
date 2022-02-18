import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  constructor(private loggingService : LoggingService,private accountService : AccountService){
  }
  onSetTo(status: string) {
    this.accountService.onStatusChanged({id: this.id, newStatus: status});
   // this.loggingService.logStatus(status);
   this.accountService.statusChanged.emit(status);
  }

  @Input() account: {name: string, status: string};
  @Input() id: number;

}
