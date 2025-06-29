import { Routes } from '@angular/router';
import { Acceuil } from './components/acceuil/acceuil';
import { TableauDeBord } from './components/tableau-de-bord/tableau-de-bord';
import { Dashboard } from './components/dashboard';

export const routes: Routes = [
  { path: '', component: Acceuil, pathMatch: 'full' },  // CORRECTION ICI
  { path: 'tableau-de-bord', component: TableauDeBord },
  { path: 'dashboard', component: Dashboard }
];
