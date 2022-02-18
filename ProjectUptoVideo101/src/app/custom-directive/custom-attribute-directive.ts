import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: "[myCustomAttributeDirective]"
})
export class CustomeAttributeDirective implements OnInit     {
    ngOnInit() {
        this.element.nativeElement.style.backgroundColor = 'green';
    }
    constructor(private element: ElementRef) {
    }
}