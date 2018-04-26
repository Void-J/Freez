import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vlogbis',
  templateUrl: './vlogbis.component.html',
  styleUrls: ['./vlogbis.component.css'],
  host: {
    '(window:scroll)': 'updateHeader($event)'
}
})
export class VlogbisComponent {
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 100;
  

  constructor() {}

  updateHeader(evt) {
      this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
      if(this.currPos >= this.changePos ) {
          this.isScrolled = true;
      } else {
          this.isScrolled = false;
      }
  }
  
}