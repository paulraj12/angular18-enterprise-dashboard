import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private elm: ElementRef) { 
    this.elm.nativeElement.style.backgroundColor = 'green';
  }

}
