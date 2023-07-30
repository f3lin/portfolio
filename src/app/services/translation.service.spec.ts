import {TestBed} from '@angular/core/testing';
import {
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateLoader,
  TranslateModule,
  TranslateService,
  TranslateStore
} from '@ngx-translate/core';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

import {TranslationService} from './translation.service';
import {Observable, of} from "rxjs";

// Custom MissingTranslationHandler to handle missing translations
export class CustomMissingTranslationHandler implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return 'Home';
  }
}

describe('TranslationService', () => {
  let service: TranslationService;
  let translate: TranslateService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            // useValue: {}, // Here, you can add your custom loader if required
            useClass: TranslateLoaderMock
          },
          missingTranslationHandler: {
            provide: MissingTranslationHandler,
            useClass: CustomMissingTranslationHandler
          }
        }),
      ],
      providers: [TranslationService, TranslateService, TranslateStore]
    });

    service = TestBed.inject(TranslationService);
    translate = TestBed.inject(TranslateService);
    httpMock = TestBed.inject(HttpTestingController);

    translate.setTranslation('en', {
      'HOME_PAGE.TITLE': 'Home',
      'HOME_PAGE.DESCRIPTION': 'Welcome to our application!'
    });

    translate.setTranslation('fr', {
      'HOME_PAGE.TITLE': 'Accueil',
      'HOME_PAGE.DESCRIPTION': 'Bienvenue sur notre application !'
    });

    translate.setTranslation('de', {
      'HOME_PAGE.TITLE': 'Startseite',
      'HOME_PAGE.DESCRIPTION': 'Willkommen in unserer Anwendung!'
    });

    translate.setDefaultLang('en'); // Set the default language for fallback
    translate.use('en'); // Set the initial language to English
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set default language on initialization', () => {
    const defaultLanguage = 'en';
    expect(translate.defaultLang).toEqual(defaultLanguage);
  });

  it('should change language using translate service', () => {
    const newLanguage = 'fr';
    spyOn(translate, 'use');

    service.changeLanguage(newLanguage);

    expect(translate.use).toHaveBeenCalledWith(newLanguage);
  });

  it('should translate text to the selected language', () => {
    service.changeLanguage('fr');
    expect(translate.currentLang).toEqual('fr');

    let translatedText = translate.instant('HOME_PAGE.TITLE');
    expect(translatedText).toEqual('Accueil');

    translatedText = translate.instant('HOME_PAGE.DESCRIPTION');
    expect(translatedText).toEqual('Bienvenue sur notre application !');
  });

  it('should fallback to default language when translation key is missing', () => {
    service.changeLanguage('de');
    expect(translate.currentLang).toEqual('de');

    // The translation key 'NOT_EXISTING_KEY' doesn't exist in the 'de' language, so it should fallback to default language 'en'
    const translatedText = translate.instant('NOT_EXISTING_KEY');
    expect(translatedText).toEqual('Home');
  });
});

class TranslateLoaderMock implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    // Return a mock translation object or an empty object
    return of({
      'HOME_PAGE.TITLE': 'Mock Home',
      'HOME_PAGE.DESCRIPTION': 'Mock Welcome!'
    });
  }
}
