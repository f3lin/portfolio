import {Injectable} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private defaultLanguage = 'en'; // Définissez la langue par défaut ici

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.defaultLanguage); // Définissez la langue par défaut
  }

  changeLanguage(language: string) {
    this.translate.use(language);
  }
}
