import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoFilter',
  pure: false,
})
export class TodoFilterPipe implements PipeTransform {

  transform(items: any[], args?: boolean): any {
    let data  = items
    if (!items) return [];
    if(args){
      return items.filter(item => item.complete == false);
    }else{
        return data;
    }
  }
}
