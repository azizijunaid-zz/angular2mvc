import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo';

@Pipe({
    name: 'todofilter',
    pure: false
})
export class TodoFilterPipe implements PipeTransform {
  transform(items: Todo[], filter: Todo): Todo[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
   // return items.filter((item: Todo) => this.applyFilter(item, filter));
   return items.filter(item => console.log('item in filter', item))
  }
  
  // /**
  //  * Perform the filtering.
  //  * 
  //  * @param {Book} book The book to compare to the filter.
  //  * @param {Book} filter The filter to apply.
  //  * @return {boolean} True if book satisfies filters, false if not.
  //  */
  // applyFilter(todo: Todo, filter: Todo) {

  //   console.log(todo)
  //   console.log(filter)
  //   // for (let field in filter) {
  //   //   if (filter[field]) {
  //   //     if (typeof filter[field] === 'string') {
  //   //       if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
  //   //         return false;
  //   //       }
  //   //     } else if (typeof filter[field] === 'number') {
  //   //       if (book[field] !== filter[field]) {
  //   //         return false;
  //   //       }
  //   //     }
  //   //   }
  //   // }
  //   return false;
  // }
}                          