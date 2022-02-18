import { 
  Component, OnInit, Input, ViewEncapsulation,
  OnChanges,SimpleChanges,DoCheck,
  AfterContentInit,AfterContentChecked,
  AfterViewInit,AfterViewChecked,OnDestroy, ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerComponent implements OnInit,OnChanges,DoCheck,
AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  @ContentChild('contentParagraph',{static:true}) contentFromAppComp:ElementRef;

  constructor() {
    console.log("constructor called!");
   }

  ngOnInit() {
    console.log("ngOnInit called!");
    console.log("Text on Server "+this.serverNameRef.nativeElement.textContent);
    console.log("Content text "+this.contentFromAppComp.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked called!");
  }
  ngAfterViewInit() {
    console.log("ngAfterViewInit called!");
    console.log("Text on Server "+this.serverNameRef.nativeElement.textContent);
  }
  ngAfterContentChecked() {
    console.log("ngAfterContentChecked called!");
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit called!");
    console.log("Content text "+this.contentFromAppComp.nativeElement.textContent);
  }
  ngDoCheck() {
    console.log("ngAfterContentInit called!");
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges called!");
    console.log(changes);
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called!");
 }

  @Input('srvElement')
  element:{type:string,name:string,content:string};

  @Input('name')
  name:string;

  @ViewChild('serverNameRef',{static:true}) serverNameRef: ElementRef;


}
