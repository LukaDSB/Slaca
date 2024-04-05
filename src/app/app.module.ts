import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TelaBaseComponent } from './tela-base/tela-base.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaBaseComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent, TelaBaseComponent]
})
export class AppModule { }
