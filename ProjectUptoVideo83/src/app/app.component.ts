import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 oddNumbers:number[]=[];
 evenNumbers:number[]=[];

  onIntervalReceived(intervalReceived:number){
    console.log(intervalReceived);
    if(intervalReceived%2===0){
      this.evenNumbers.push(intervalReceived);
    }else{
      this.oddNumbers.push(intervalReceived);
    }
  }
}
