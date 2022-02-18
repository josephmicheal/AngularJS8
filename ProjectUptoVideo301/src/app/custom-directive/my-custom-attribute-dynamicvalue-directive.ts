import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[MyCustomAttributeDynamicValueDirective]'
})
export class MyCustomAttributeDynamicValueDirective implements OnInit{

  constructor(private element:ElementRef,private render:Renderer2) { }

  ngOnInit(){    
    this.backgroundColor = this.defaultColor;
  }

  @Input() defaultColor:string = 'blue';
  @Input('MyCustomAttributeDynamicValueDirective') mouseHoverColor:string;

  @HostBinding('style.backgroundColor') backgroundColor:string;

  @HostListener('mouseenter') mouseenter(){
    this.backgroundColor = this.mouseHoverColor;
  }
  
  @HostListener('mouseleave') mouseleave(){
    this.backgroundColor = this.defaultColor;
  }
}
