import { Component } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-resume-transactions',
  standalone: true,
  imports: [
    CommonModule,   
    CurrencyPipe    
  ],
  templateUrl: './resume-transactions.html',
  styleUrls: ['./resume-transactions.css']
})
export class ResumeTransactions {
  transactions = [
    { date: '2025-06-20', libelle: 'Achat supermarché', montant: -2500 },
    { date: '2025-06-19', libelle: 'Recharge mobile', montant: -1000 },
    { date: '2025-06-18', libelle: 'Transport', montant: -1500 },
    { date: '2025-06-17', libelle: 'Retrait', montant: -5000 },
    { date: '2025-06-16', libelle: 'Salaire', montant: 50000 },
  ];
}