import { PipeTransform, Pipe } from "@angular/core";


@Pipe({
    name:'sortServersPipe',
    pure:false
})
export class SortServersPipe implements PipeTransform{
    transform(servers:any[]){
        return servers.sort((a, b) => (a.name > b.name) ? 1 : -1);
    }    
}
