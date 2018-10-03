import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaqueteTuristicoComponent } from './components/paquete-turistico/paquete-turistico.component';

@NgModule({
  declarations: [
    AppComponent,
    PaqueteTuristicoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
