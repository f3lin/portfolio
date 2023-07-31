import {Component, Input} from '@angular/core';
import {TranslationService} from "../../../services/translation.service";
import {StarsOptions} from "../../../data/stars-options.data";
import {Competences} from "../../../data/competences.data";


@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css'],
})
export class CompetencesComponent {

  @Input() competenceData_ : Competences | undefined;
  dataType = "language";
  starOn: StarsOptions = {one: true, two: true, three: true, four: true, five: true, six: true};

  constructor(private translationService: TranslationService) {
  }

  setStarsOptions(level: number): StarsOptions {
    if (level === 1) return {one: true, two: false, three: false, four: false, five: false, six: false};
    if (level === 2) return {one: true, two: true, three: false, four: false, five: false, six: false};
    if (level === 3) return {one: true, two: true, three: true, four: false, five: false, six: false};
    if (level === 4) return {one: true, two: true, three: true, four: true, five: false, six: false};
    if (level === 5) return {one: true, two: true, three: true, four: true, five: true, six: false};
    return this.starOn;
  }

  setCompetenceData(dataType: string) {
    this.dataType = dataType;
  }
}
