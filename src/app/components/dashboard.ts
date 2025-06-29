import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnTete } from './en-tete';
import { MenuLateral } from './menu-lateral';
import { ResumeTransactions } from './resume-transactions';
import { GraphiqueDepenses } from './graphique-depenses';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    EnTete,
    MenuLateral,
    ResumeTransactions,
    GraphiqueDepenses
  ],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {}