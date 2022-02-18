import { Injectable, EventEmitter } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable()
export class AccountService {
    
    constructor(private loggingService:LoggingService){

    }

    statusChanged = new EventEmitter<string>();

    onAccountAdded(name: string, status: string) {
        this.accounts.push({name: name, status: status});
        this.loggingService.logStatus(status);
      }

    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];
    

    
      onStatusChanged(updateInfo: {id: number, newStatus: string}) {
        this.accounts[updateInfo.id].status = updateInfo.newStatus;
        this.loggingService.logStatus(updateInfo.newStatus);
      }

}