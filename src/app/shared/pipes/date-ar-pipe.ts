import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAr'
})
export class DateArPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
