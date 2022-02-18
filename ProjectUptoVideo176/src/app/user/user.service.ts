import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class UserService {
    userActivationEmitter = new Subject<boolean>();

    activateUser(){
        this.userActivationEmitter.next(true);
    }
}