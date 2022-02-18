import { PipeTransform, Pipe } from "@angular/core";
import { DatePipe } from "@angular/common";

@Pipe({
    name:'upperCaseDateFormatPipe'
})
export class DateFormatPipe implements PipeTransform{
    constructor(public datepipe: DatePipe){}
    transform(date:Date,dateFormat:any,lowerOrUpper:any){
        if('lower'=== lowerOrUpper){
            return this.datepipe.transform(date, dateFormat).toLowerCase();
        }else{
            return this.datepipe.transform(date, dateFormat).toUpperCase();
        }
    }    
}
