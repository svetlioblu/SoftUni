import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  // pure:false => no pure function will re-render
})
export class ReducePipe<T> implements PipeTransform {

  transform(array: T[],
    reduceFn: (acc: any, curr: T) => any,
    initialValue: T): unknown {
    // const sum=(acc,curr)=>acc+curr
    //same like: [1,2,3].reduce(sum,0 )
    return array.reduce(reduceFn, initialValue)
  }

}
