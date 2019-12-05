import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorHover]'
})
export class ColorHoverDirective {

  @Input('appColorHover') appColorHover: string;
  @Input('enlarge') enlarge: boolean;

  private el: HTMLElement;

  constructor(el: ElementRef) { 
    this.el = el.nativeElement;
    console.log('ColorHoverDirective');
  }
  @HostListener('click') shukiHalachLaYam() {
    this.el.textContent = 'Avraham Yehuda Shor'
    // this.el.innerText ='Avraham Yehuda Shor'
    alert('hey, u clikced me ' + this.el.textContent)
   
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appColorHover || 'cyan');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.style.backgroundColor = color;
    if (!color) {
      this.el.style.backgroundColor = 'lightgrey';
    }
    if (this.enlarge) {
      this.el.style.fontSize = '1.5em';
    }
  }

  

}
