import { PipeTransform, Pipe } from "@angular/core";


@Pipe({
    name:'reversePipe'
})
export class ReversePipe implements PipeTransform{
    transform(instanceType:string){
        return instanceType.split("").reverse().join("");
    }    
}
