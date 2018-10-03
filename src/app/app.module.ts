import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//rutas
import { AppRoutingModule } from './app.routes';

//servicios
import { TurismoService } from './servicios/turismo.service';

import { AppComponent } from './app.component';
import { PaqueteTuristicoComponent } from './components/paquete-turistico/paquete-turistico.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';


import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    PaqueteTuristicoComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ TurismoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
