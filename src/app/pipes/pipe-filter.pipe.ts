import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeFilter'
})
export class PipeFilterPipe implements PipeTransform {

  transform(name: string[],select:string): string[] {

    return name.filter(s=> s.includes(select));
  }
  

}
