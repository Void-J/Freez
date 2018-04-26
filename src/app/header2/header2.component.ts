import { Component, OnInit, Input } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css'],
  host: {
        '(window:scroll)': 'updateHeader($event)'
    }
})
export class Header2Component {
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