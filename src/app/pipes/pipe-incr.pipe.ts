import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeIncr'
})
export class PipeIncrPipe implements PipeTransform {

  transform(n:number): number {
    return n+1;
  }

}
