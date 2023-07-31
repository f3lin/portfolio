import {ComponentFixture, TestBed} from '@angular/core/testing';

import {StarsSvgComponent} from './stars-svg.component';

describe('StarsSvgComponent', () => {
  let component: StarsSvgComponent;
  let fixture: ComponentFixture<StarsSvgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarsSvgComponent]
    });
    fixture = TestBed.createComponent(StarsSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
