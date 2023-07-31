import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CompetencesComponent} from './competences.component';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('CompetencesComponent', () => {
  let component: CompetencesComponent;
  let fixture: ComponentFixture<CompetencesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompetencesComponent],
      imports: [
        TranslateModule.forRoot(),
        HttpClientTestingModule,
      ],

      providers: [TranslateService]
    });
    fixture = TestBed.createComponent(CompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
