import { Component, OnInit } from '@angular/core';
import { MatSlider } from '@angular/material/slider';

@Component({
  selector: 'comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {


  gridsize: number = 30;
  opatiScreen:HTMLElement
  updateSetting(event) {
    this.gridsize = event.value;
    document.querySelector('footer').style.opacity = `${(event.value*1)/1000}`
  }



  constructor() { }

  ngOnInit() {
   
      
   
      
      
  }
  

}
