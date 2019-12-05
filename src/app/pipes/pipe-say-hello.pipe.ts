import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeSayHello'
})
export class PipeSayHelloPipe implements PipeTransform {

  transform(msg:string): any {
    return "hello "+msg;
  }

}
