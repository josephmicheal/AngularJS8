import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterStatus',
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(servers: any, filterString:any,propertyName:string): any {
    console.log("filterString:"+filterString+":");
      if(filterString === undefined || filterString === '' || servers.length === 0 || servers === ''){
        return servers;
      }

      const filterServers= [];
      for( let server of servers){
        if(server[propertyName]===filterString){
          filterServers.push(server);
        }
      }
      return filterServers;
  }

}
