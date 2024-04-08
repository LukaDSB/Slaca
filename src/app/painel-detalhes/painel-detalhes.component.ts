import { Component, OnInit } from '@angular/core';
import { Detalhes } from '../modules/mockDetalhes';

@Component({
  selector: 'app-painel-detalhes',
  templateUrl: './painel-detalhes.component.html',
  styleUrls: ['./painel-detalhes.component.scss']
})
export class PainelDetalhesComponent implements OnInit {

  detalhes: Detalhes;

  autores: string[] = [
    'Galileo Galilei',
    'Berta Lange de Morretes',
    'Isaac Newton',
    'Cesar Lattes',
    'Stephen Hawking'
  ];

  universidades: string[] = [
    'Universidade Estadual de Campinas',
    'Universidade de São Paulo',
    'Instituto Nacional de Pesquisas Espaciais',
    'Universidade Federal do Rio de Janeiro'
  ];

  constructor() {
    this.detalhes = new Detalhes(
      'Pôster',
      'Alimentação e Saúde (AS)',
      [
        'Alimentos funcionais', 
        ' alimentação escolar'
      ]
    );
   }

  ngOnInit(): void {
  }

}
