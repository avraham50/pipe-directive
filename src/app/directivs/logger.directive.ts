import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appLogger]'
})
export class LoggerDirective {
  el: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }


  @HostListener('keydown') makeVisilitiByClick() {
    console.log('el', this.el.nativeElement.value);
    
  }

  @HostListener('mouseenter') makeVisilitiByMouse() {
    // this.el.nativeElement.style.visibility = 'hidden'
  }
  @HostListener('mouseleave') makeVisilitiByLeave() {
    // this.el.style.visibility = 'visible'
    // // this.el.style.fontSize = '100px'
  }
}
