import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontroler',
  templateUrl: './gamecontroler.component.html',
  styleUrls: ['./gamecontroler.component.css']
})
export class GamecontrolerComponent implements OnInit {

  @Output('intervalFromGameControler') intervalToBeEmitted = new EventEmitter<Number>();

  interval;

  intervalNumber:number = 0;

  constructor() { }

  ngOnInit() {
  }

  startEvent(){
    console.log("startEvent");
    this.interval = setInterval(()=>{
      this.intervalToBeEmitted.emit(this.intervalNumber +1);
      this.intervalNumber++;
    },1000);
    
  }
  
  pauseEvent(){
    console.log("pauseEvent");
    clearInterval(this.interval);
  }
}
