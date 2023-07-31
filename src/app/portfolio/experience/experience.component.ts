import {Component, OnInit} from '@angular/core';
import {TranslationService} from "../../services/translation.service";
import {Data, MyData} from "../../data/db";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{

  Data : Data | undefined;

  isExperiencesStatic = true;
  isCompetencesStatic = false;
  isExperiencesVisible = true;

  constructor(private translationService: TranslationService) {
  }

  ngOnInit(){
    this.Data = MyData;
  }

  changeViewToExperiences() {
    this.isExperiencesVisible = !this.isExperiencesVisible;
    this.isExperiencesStatic = true;
    this.isCompetencesStatic = false;
  }

  changeViewToCompetences() {
    this.isExperiencesVisible = !this.isExperiencesVisible;
    this.isCompetencesStatic = true;
    this.isExperiencesStatic = false;
  }
}
