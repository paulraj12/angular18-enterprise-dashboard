import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initial',
  standalone: true
})
export class InitalPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';
    const words = value.trim().split(' ');
    return words
      .map(word => word.charAt(0).toUpperCase())
      .join('');
  }
}
