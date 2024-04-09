import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TelaBaseComponent } from './tela-base/tela-base.component';
import { PainelDetalhesComponent } from './painel-detalhes/painel-detalhes.component';
import { ResumoComponent } from './resumo/resumo.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RespostasComponentComponent } from './respostas-component/respostas-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaBaseComponent,
    PainelDetalhesComponent,
    ResumoComponent,
    FooterComponentComponent,
    RespostasComponentComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent, TelaBaseComponent]
})
export class AppModule { 
  
}
