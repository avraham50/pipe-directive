import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeBig'
})
export class PipeBigPipe implements PipeTransform {

  transform(ari:string): string {
    return ari.replace(ari.charAt(0), ari.charAt(0).toUpperCase());
  }

}
