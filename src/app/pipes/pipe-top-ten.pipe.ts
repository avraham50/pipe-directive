import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeTopTen'
})
export class PipeTopTenPipe implements PipeTransform {

  transform(arr: string[]): string[] {
    return arr.slice(0,10);
  }

}
