import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector:"[unless]"
})
export class MyCustomStructuralUnlessDirective{

    constructor(private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef){

    }

    @Input() set unless(condition:boolean){
        if(!condition){
            this.vcRef.createEmbeddedView(this.templateRef);
        }else{
            this.vcRef.clear();
        }
    }
}