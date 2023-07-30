import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // computerText = 'computerText computerText computerText';
  computerText = 'computerTextco puterText com puterTe xt comp uter Text compute rText computerText';

  isActive = true;

  keyboardX = 260; // Position horizontale initiale du rectangle (clavier)
  readonly keyboardWidth = 500; // Largeur du rectangle (clavier)
  readonly monitorX = 200; // Position horizontale du moniteur (limite gauche)
  readonly monitorWidth = 620; // Largeur du moniteur (limite droite)


  moveStep = 5; // Pas de déplacement horizontal
  moveDirection = 1; // Direction initiale du mouvement (1 pour droite, -1 pour gauche)

  ngOnInit(): void {
    // Mettre en place le mouvement répété du clavier
    this.moveKeyboard();
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
}
