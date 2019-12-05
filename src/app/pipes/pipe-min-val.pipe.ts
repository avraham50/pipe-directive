import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeMinVal'
})
export class PipeMinValPipe implements PipeTransform {

  transform(numbers: number[]): number {
    let m = numbers[0];
    numbers.forEach((n) => {
      if (n < m) {
        m = n
      }
    })
    return m;
  }
}
