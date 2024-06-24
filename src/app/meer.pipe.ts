import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meer'
})
export class MeerPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    
    return "mershaf";
  }

}
