import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    if (value > 0) {
      return `+${value.toFixed(1)}`;
    }
    return value.toFixed(1);
  }

}
