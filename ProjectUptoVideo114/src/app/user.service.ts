import { Injectable, EventEmitter } from "@angular/core";


@Injectable({providedIn: 'root'})
export class UserService{

    countActiveEmitter = new EventEmitter<number>();
    counterInActiveEmitter = new EventEmitter<number>();

    countActive : number= 0;
    countInActive : number= 0;

    activeUsers = ['Max', 'Anna'];
    inactiveUsers = ['Chris', 'Manu'];
  
    onSetToInactive(id: number) {
      this.inactiveUsers.push(this.activeUsers[id]);
      this.activeUsers.splice(id, 1);
      this.countInActive++;
      this.counterInActiveEmitter.emit(this.countInActive);
    }
  
    onSetToActive(id: number) {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
      this.countActive++;
      this.countActiveEmitter.emit(this.countActive);
    }

}