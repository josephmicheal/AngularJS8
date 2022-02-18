import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[MyUpdatedCustomAttributeEventDirective]'
})
export class MyUpdatedCustomAttributeEventDirective implements OnInit{

  constructor(private element:ElementRef,private render:Renderer2) { }

  ngOnInit(){    
    
  }

  @HostListener('mouseenter') mouseenter(){
    this.render.setStyle(this.element.nativeElement,'background-color','yellow');
  }

  
  @HostListener('mouseleave') mouseleave(){
    this.render.setStyle(this.element.nativeElement,'background-color','green');
  }
}
