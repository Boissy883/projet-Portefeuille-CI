import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-acceuil',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./acceuil.css'],
  templateUrl: './acceuil.html'
})
export class Acceuil {
  mode: string = 'connexion';

  // Champs pour connexion
  email: string = '';
  password: string = '';

  // Champs pour inscription
  nom: string = '';
  prenom: string = '';
  emailInscription: string = '';
  passwordInscription: string = '';

  // Champs pour reset
  emailReset: string = '';

  // Bienvenue
  utilisateurConnecte: string | null = null;

  changerMode(nouveauMode: string) {
    this.mode = nouveauMode;
  }

  login() {
    // Simuler authentification réussie
    this.utilisateurConnecte = this.email.split('@')[0];  // juste un exemple
    alert(`Bienvenue ${this.utilisateurConnecte} !`);
    // On pourrait changer la vue ici si nécessaire
  }

  register() {
    // Simuler inscription
    this.utilisateurConnecte = this.nom;
    alert(`Bienvenue ${this.utilisateurConnecte} ! Votre compte a été créé.`);
    this.mode = 'connexion';
  }

  resetPassword() {
    alert(`Un email de réinitialisation a été envoyé à ${this.emailReset}`);
    this.mode = 'connexion';
  }
}