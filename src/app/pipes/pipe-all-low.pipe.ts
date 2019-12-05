import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeAllLow'
})
export class PipeAllLowPipe implements PipeTransform {

  transform(ari: string): string {
    return ari.toLowerCase();
  }
}
