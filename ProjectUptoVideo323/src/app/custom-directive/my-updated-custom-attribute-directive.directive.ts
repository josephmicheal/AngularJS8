import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[myUpdatedCustomAttributeDirective]'
})
export class MyUpdatedCustomAttributeDirectiveDirective implements OnInit{

  constructor(private element:ElementRef,private render:Renderer2) { }

  ngOnInit(){    
    this.render.setStyle(this.element.nativeElement,'background-color','yellow');
  }

}
