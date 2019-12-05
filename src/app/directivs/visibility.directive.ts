import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appVisibility]'
})


export class VisibilityDirective {

// @Input('appVisibility') appVisibility: string;

private el:HTMLElement

  constructor(el:ElementRef) {
    this.el =el.nativeElement
   }


   @HostListener('click')makeVisilitiByClick(){
     this.el.style.fontSize = '20px'
     this.el.style.backgroundColor = 'black'
   }

  @HostListener('mouseenter') makeVisilitiByMouse() {
    this.el.style.visibility = 'hidden'
  }
  @HostListener('mouseleave') makeVisilitiByLeave() {
    this.el.style.visibility = 'visible'
    // this.el.style.fontSize = '100px'
  }
}
