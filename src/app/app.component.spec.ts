import {ComponentFixture, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        TranslateModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [TranslateService]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display links', () => {
    const compiled = fixture.nativeElement;
    const links = compiled.querySelectorAll('.navbar-item');
    expect(links.length).toBe(10); // Assuming you have 3 links in the navbar
  });

  it('should call changeLanguage method on clicking language links', () => {
    spyOn(component, 'changeLanguage');
    const compiled = fixture.nativeElement;
    const languageLinks = compiled.querySelectorAll('.navbar-dropdown .buttons .button');

    // Simulate clicking on each language link
    for (let i = 0; i < languageLinks.length; i++) {
      languageLinks[i].click();
      expect(component.changeLanguage).toHaveBeenCalledWith(['en', 'de', 'fr'][i]); // Assuming the order of links is FR, DE, EN
    }
  });
});
