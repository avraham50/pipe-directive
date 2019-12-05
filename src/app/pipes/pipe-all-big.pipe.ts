import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeAllBig'
})
export class PipeAllBigPipe implements PipeTransform {

  transform(ari:string): string {
    return ari.toUpperCase();
  }

}
