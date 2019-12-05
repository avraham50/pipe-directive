import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeDate'
})
export class PipeDatePipe implements PipeTransform {

  transform(aaa:string): string {
    let d = new Date;
    return `${d.getDay()},${d.getMonth()},${d.getFullYear}`; 
  }

}
