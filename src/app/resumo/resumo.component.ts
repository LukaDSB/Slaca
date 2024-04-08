import { Component, OnInit } from '@angular/core';
import { repeat } from 'cypress/types/lodash';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss']
})
export class ResumoComponent implements OnInit {

  loremIpsum: string = this.gerarLoremIpsum(20);
  expandido: boolean = false;

  gerarLoremIpsum(tamanho: number): string{
    const texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    return texto.repeat(tamanho);
  }

  expandir() {
      this.expandido = !this.expandido;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
