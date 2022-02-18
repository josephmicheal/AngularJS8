import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map,filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  customCountSubscription: Subscription;
  constructor() { }
  ngOnInit() {
    const customCountObservable = Observable.create(observer => {
      let count = 0;

      setInterval(() => {
        observer.next(count);

        if (count == 1) {
          observer.complete();
        }

        if (count == 2) {
          observer.error(new Error("Count is 2 now"));
        }

        count++;
      }, 1000);
    });
    

    this.customCountSubscription = customCountObservable.pipe(filter((data:number) =>{
        return data > 0;
    }),map(data =>{
      return "count:" + data;
    })).subscribe((data: number) => {
      console.log(data);
    }, error => {
      console.log(error);
      alert("Error handling in Observer");
    }, () => {
      console.log("Completed");
    });
  }

  ngOnDestroy(): void {
    this.customCountSubscription.unsubscribe();
  }
}
