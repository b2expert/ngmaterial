import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[arrow-el]',
})
export class ArrowElDirective {
  element:HTMLElement;
  constructor(private el: ElementRef, private render: Renderer2) {
    this.render.setAttribute(this.el.nativeElement, "tabindex", "0")
    this.element=this.el.nativeElement;
  }
}