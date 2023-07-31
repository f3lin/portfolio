import {Component} from '@angular/core';
import {TranslationService} from "../../../services/translation.service";

@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css']
})
export class EnterprisesComponent {

  constructor(private translationService: TranslationService) {
  }

}
