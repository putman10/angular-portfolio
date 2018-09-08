import { Component, OnInit } from '@angular/core';
import { TeximateOptions, TeximateOrder, TeximateHover } from "ng-teximate";

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  text = "Hello I'm Ryan Putman...";

  effectOptions: TeximateOptions = {
    type: 'letter',
    animation: { name: 'fadeInLeftBig', duration: 1000 },
    word: { type: TeximateOrder.SEQUENCE, delay: 100 },
    letter: { type: TeximateOrder.SEQUENCE, delay: 50 }
  };

  hoverOptions: TeximateHover = {
    type: 'letter',
    in: 'zoomIn',
    out: 'rubberBand'
  };

}
