import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appAnimate]'
})
export class AnimateDirective {

  constructor(
    public el: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.transformAnimation(1.2, 1.2);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(1, 1)`);
    this.renderer.setStyle(this.el.nativeElement, 'transition', `transform 0.5s ease-in`);
  }

  transformAnimation(x, y) {
    this.renderer.setStyle(this.el.nativeElement, 'transform', `scale(1.1, 1.1)`);
    this.renderer.setStyle(this.el.nativeElement, 'transition', `transform 0.5s ease-out`);
    // transition: background-color 0.5s ease;
  }

}
