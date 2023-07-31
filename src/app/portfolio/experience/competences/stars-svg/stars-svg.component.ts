import {Component, Input} from '@angular/core';
import {StarOn} from "../../../../data/star-on";

@Component({
  selector: 'app-stars-svg',
  templateUrl: './stars-svg.component.svg',
  styleUrls: ['./stars-svg.component.css']
})
export class StarsSvgComponent {

  @Input() starLitOrSwitchedOff: StarOn = {
      one: true,
      two: true,
      three: true,
      four: true,
      five: true,
      six: true
  };

}
