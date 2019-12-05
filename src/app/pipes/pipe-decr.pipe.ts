import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDecr'
})
export class PipeDecrPipe implements PipeTransform {

  transform(n: number): number {
    return n - 1;
  }

}
