import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterModule} from "@angular/router";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        TranslateModule.forRoot(),
        RouterModule.forRoot([]),
        HttpClientTestingModule,
      ],

      providers: [TranslateService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle isActive on circle click', () => {
    const initialValue = component.isActive;
    component.onCircleClick();
    expect(component.isActive).toBe(!initialValue);
  });

});
