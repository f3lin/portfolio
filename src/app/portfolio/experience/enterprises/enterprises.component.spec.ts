import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {EnterprisesComponent} from "./enterprises.component";

describe('EnterprisesComponent', () => {
  let component: EnterprisesComponent;
  let fixture: ComponentFixture<EnterprisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterprisesComponent],
      imports: [
        TranslateModule.forRoot(),
        HttpClientTestingModule,
      ],

      providers: [TranslateService]
    });
    fixture = TestBed.createComponent(EnterprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
