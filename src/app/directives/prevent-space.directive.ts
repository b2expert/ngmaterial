import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[preventSpace]'
})
export class PreventSpaceDirective {

  constructor() { }

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    if(input.value.startsWith(' ')) {
      input.value = input.value.trim();
    }
  }
}
