import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoFilter',
  pure: false,
})
export class TodoFilterPipe implements PipeTransform {

  transform(items: any[], args?: boolean): any {
    //console.log('value', args);
    let data  = items
    if (!items) return [];
   // console.log(items.filter(item => item.complete == false))
   if(args){
     return items.filter(item => item.complete == false);
    }else{
      return data;
    }
  }
}
