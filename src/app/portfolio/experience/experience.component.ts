import {Component, OnInit} from '@angular/core';
import {TranslationService} from "../../services/translation.service";
import {Competences, MyData} from "../../data/competences.data";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{

  competenceData : Competences | undefined;

  isExperiencesStatic = true;
  isCompetencesStatic = false;
  isExperiencesVisible = true;

  constructor(private translationService: TranslationService) {
  }

  ngOnInit(){
    this.competenceData = MyData;
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
