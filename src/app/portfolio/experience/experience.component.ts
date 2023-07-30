import {Component} from '@angular/core';
import {TranslationService} from "../../services/translation.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  constructor(private translationService: TranslationService) { }

}
