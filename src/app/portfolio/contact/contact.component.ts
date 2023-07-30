import {Component} from '@angular/core';
import {TranslationService} from "../../services/translation.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private translationService: TranslationService) { }

}
