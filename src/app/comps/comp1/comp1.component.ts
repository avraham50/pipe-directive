import { Component, OnInit } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
@Component({
  selector: 'comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  names:string[]=[
  'avi', 'moshe', 'yosef', 'itzi', 'dany', 'chaim', 'ari', 'momo',
  'shalom', 'yehuda', 'avi', 'moshe', 'avi', 'moshe', 'avi', 'moshe'
]
sName:string

// <input type="text" id="selectName">

  constructor() { }

  ngOnInit() {

    console.log(this.names);
   
  }

}
