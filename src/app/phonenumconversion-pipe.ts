import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phonenumconversion',
  standalone: true
})
export class PhonenumconversionPipe implements PipeTransform {
  transform(value: any, ...args: unknown[]): unknown {
    return value?.replace(/\D/g, '');
  }
}
