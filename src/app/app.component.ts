import { Component } from '@angular/core';
import { faCheckDouble, faEllipsisV, faGlobe, faHeart, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';
  
  verticalElipsis = faEllipsisV;
  heart = faHeart;
  globo = faGlobe;
  mais = faPlus;
  doubleCheckIcon = faCheckDouble;

  exibir:boolean = false;
  criandoNovoTopico:boolean = false;
  carregandoTopico:boolean = false;

  exibirRespostas(){
    this.exibir = !this.exibir;
  }

  criarTopico(){
    this.carregandoTopico == true? this.carregandoTopico = !this.carregandoTopico : null;
    this.criandoNovoTopico = !this.criandoNovoTopico;
  }

  enviarTopico(){
    this.carregandoTopico = true;
    this.criandoNovoTopico = !this.criandoNovoTopico;
  }
}
