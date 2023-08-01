import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './portfolio/home/home.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslationService} from "./services/translation.service";
import {AboutComponent} from './portfolio/about/about.component';
import {ContactComponent} from './portfolio/contact/contact.component';
import {CompetencesComponent} from './portfolio/experience/competences/competences.component';
import {StarsSvgComponent} from './portfolio/experience/competences/stars-svg/stars-svg.component';
import {ExperienceComponent} from "./portfolio/experience/experience.component";
import {EnterprisesComponent} from "./portfolio/experience/enterprises/enterprises.component";
import {NgOptimizedImage} from "@angular/common";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    EnterprisesComponent,
    ContactComponent,
    CompetencesComponent,
    StarsSvgComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        NgOptimizedImage
    ],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
