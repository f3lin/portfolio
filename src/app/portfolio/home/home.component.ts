import {Component, OnInit} from '@angular/core';
import {TranslationService} from "../../services/translation.service";
import {ActivatedRoute, Router} from "@angular/router";
import {BehaviorSubject} from "rxjs";
import {enterprise} from "../../data/enterprise.data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // computerText = 'computerText computerText computerText';
  computerText = new BehaviorSubject<string>('');

  isActive = true;

  keyboardX = 260; // Position horizontale initiale du rectangle (clavier)
  readonly keyboardWidth = 500; // Largeur du rectangle (clavier)
  readonly monitorX = 200; // Position horizontale du moniteur (limite gauche)
  readonly monitorWidth = 620; // Largeur du moniteur (limite droite)


  moveStep = 5; // Pas de déplacement horizontal
  moveDirection = 1; // Direction initiale du mouvement (1 pour droite, -1 pour gauche)

  constructor(private translationService: TranslationService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.setComputerText();
    // Mettre en place le mouvement répété du clavier
    this.moveKeyboard();

    this.route.paramMap.subscribe(params => {
      if (params.get('id')) {
        localStorage.setItem('routeSource', params.get('id')!);
        this.router.navigateByUrl('');
      }
    });

  }

  changeLanguage(language: string) {
    this.translationService.changeLanguage(language);
  }

  onCircleClick() {
    this.isActive = !this.isActive;
  }

  moveKeyboard() {
    // Vérifier si le rectangle (clavier) peut être déplacé vers la droite
    if (this.moveDirection === 1 && this.keyboardX + this.keyboardWidth + this.moveStep <= this.monitorX + this.monitorWidth) {
      this.keyboardX += this.moveStep;
    } else if (this.moveDirection === -1 && this.keyboardX - this.moveStep >= this.monitorX) {
      // Vérifier si le rectangle (clavier) peut être déplacé vers la gauche
      this.keyboardX -= this.moveStep;
    }

    // Changer la direction du mouvement lorsque le rectangle atteint les bords du rectangle 1
    if (this.keyboardX <= this.monitorX || this.keyboardX + this.keyboardWidth >= this.monitorX + this.monitorWidth) {
      this.moveDirection *= -1;
    }

    // Appeler la fonction à nouveau après un court délai pour créer un mouvement continu
    setTimeout(() => this.moveKeyboard(), 50);
  }

  setComputerText () {
    if (localStorage.getItem('routeSource')) {
      const uuid = localStorage.getItem('routeSource');
      const enterprise_ = enterprise.find(x => x.uuid === uuid);
      enterprise_ ? this.computerText.next(enterprise_.name) : this.computerText.next('');
    }
  }
}
