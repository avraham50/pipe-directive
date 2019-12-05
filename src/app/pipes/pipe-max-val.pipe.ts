import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeMaxVal'
})
export class PipeMaxValPipe implements PipeTransform {

  transform( numbers: number[]): number {
    let m = 0;
    numbers.forEach((n)=>{
      if (n>m) {
        m=n
      }
    })
    return m;
  }

}
