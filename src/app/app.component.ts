import {Component} from '@angular/core';
import {TranslationService} from "./services/translation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio';

  constructor(private translationService: TranslationService) {
  }

  changeLanguage(language: string) {
    this.translationService.changeLanguage(language);
  }
}
