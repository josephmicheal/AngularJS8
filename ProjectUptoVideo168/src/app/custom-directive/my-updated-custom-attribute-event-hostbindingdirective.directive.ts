import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[MyUpdatedCustomAttributeEventHostbindingDirective]'
})
export class MyUpdatedCustomAttributeEventHostbindingDirective implements OnInit{

  constructor(private element:ElementRef,private render:Renderer2) { }

  ngOnInit(){    
    
  }

  @HostBinding('style.backgroundColor') backgroundColor:string = 'blue';

  @HostListener('mouseenter') mouseenter(){
    this.backgroundColor = 'yellow';
  }

  
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = 'green';
  }
}
