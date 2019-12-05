import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChange]'
})
export class ChangeDirective {

  @Input('opacity') appOpacity: string;

  private el: HTMLElement

  constructor(el: ElementRef,
    
    ) {
    this.el = el.nativeElement
  }


  @HostListener('change') makeVisilitiByClick() {
    console.log('HostListener("click")'), this.el;
    this.el.style.textShadow = '1'
  }

  @HostListener('mouseenter') makeVisilitiByMouse() {
    // this.el.style.opacity = '0.5'
    // this.el.style.textShadow = '1px 1px 2px black, 0 0 25px blue, 0 0 5px '
  }
  @HostListener('mouseleave') makeVisilitiByLeave() {
    // console.log('HostListener("mouseleave")'), this.el;
  }

}
