import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TelaBaseComponent } from './tela-base/tela-base.component';
import { PainelDetalhesComponent } from './painel-detalhes/painel-detalhes.component';
import { ResumoComponent } from './resumo/resumo.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaBaseComponent,
    PainelDetalhesComponent,
    ResumoComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent, TelaBaseComponent]
})
export class AppModule { }
