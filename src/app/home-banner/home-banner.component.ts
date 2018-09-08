import { Component, OnInit } from '@angular/core';
import { TeximateOptions, TeximateOrder, TeximateHover } from "ng-teximate";

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css']
})
export class HomeBannerComponent implements OnInit {

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  constructor() { }

  ngOnInit() {
    this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': -1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };

    this.myParams = {
      "particles": {
        "number": {
        "value": 72,
        "density": {
          "enable": true,
          "value_area": 801.7060304327614
        }
        },
        "color": {
        "value": "#ffffff"
        },
        "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
        },
        "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
        },
        "size": {
        "value": 4.008530152163807,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
        },
        "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
        },
        "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
        }
        },
        "interactivity": {
        "detect_on": "canvas",
        "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
        },
        "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 1
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
        }
        },
        "retina_detect": true
        }
        }

  text = "Hello, I'm Ryan Putman!";
  subText = "Front-end Dev | Native Oregonian | Goonie | Oregon Duck";

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
