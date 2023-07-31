import {Component, Input} from '@angular/core';
import {StarsOptions} from "../../../../data/stars-options.data";

@Component({
  selector: 'app-stars-svg',
  templateUrl: './stars-svg.component.svg',
  styleUrls: ['./stars-svg.component.css']
})
export class StarsSvgComponent {

  @Input() starLitOrSwitchedOff: StarsOptions = {
      one: true,
      two: true,
      three: true,
      four: true,
      five: true,
      six: true
  };

}
