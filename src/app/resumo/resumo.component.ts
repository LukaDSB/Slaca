import { Component, OnInit } from '@angular/core';
import { repeat } from 'cypress/types/lodash';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.scss']
})
export class ResumoComponent implements OnInit {

  loremIpsum1: string = this.gerarLoremIpsum(4);
  loremIpsum2: string = this.gerarLoremIpsum(5);
  expandido: boolean = false;
  resto: boolean = true;
  alturaPainel = 'auto';

  clickExpandir() {
    this.resto = !this.resto;
    this.alturaPainel = this.resto ? 'auto' : '0';
  }
  
  gerarLoremIpsum(tamanho: number): string{
    const texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

    return texto.repeat(tamanho);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
