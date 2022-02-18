import { Directive, HostBinding, HostListener, ElementRef } from "@angular/core";

@Directive({
    selector:"[recipeDropDown]"
})
export class RecipeDropDownDirective{

    @HostBinding('class.open') isOpen = false;
    // Commented code only for toggle drop down clicking on that  alone
  /*   @HostListener('click') toggleRecipeMenu(){
        this.isOpen = ! this.isOpen;
    } */

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
      this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }
    constructor(private elRef: ElementRef) {}
}