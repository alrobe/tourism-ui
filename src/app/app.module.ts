import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaqueteTuristicoComponent } from './components/paquete-turistico/paquete-turistico.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

//rutas
import { AppRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    PaqueteTuristicoComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
