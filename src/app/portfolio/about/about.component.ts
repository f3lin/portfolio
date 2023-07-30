import {Component} from '@angular/core';
import {TranslationService} from "../../services/translation.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(private translationService: TranslationService) { }

}
