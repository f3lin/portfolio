import {Component, Input} from '@angular/core';
import {TranslationService} from "../../../services/translation.service";
import {StarOn} from "../../../data/star-on";
import {Data} from "../../../data/db";


@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css'],
})
export class CompetencesComponent {

  @Input() Data : Data | undefined;
  dataType = "language";
  starOn: StarOn = {one: true, two: true, three: true, four: true, five: true, six: true};

  constructor(private translationService: TranslationService) {
  }

  setStartOnOrOff(level: number): StarOn {
    if (level === 1) return {one: true, two: false, three: false, four: false, five: false, six: false};
    if (level === 2) return {one: true, two: true, three: false, four: false, five: false, six: false};
    if (level === 3) return {one: true, two: true, three: true, four: false, five: false, six: false};
    if (level === 4) return {one: true, two: true, three: true, four: true, five: false, six: false};
    if (level === 5) return {one: true, two: true, three: true, four: true, five: true, six: false};
    return this.starOn;
  }

  setData(dataType: string) {
    this.dataType = dataType;
  }
}
