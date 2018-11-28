import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateDestinyComponent } from './pages/tourist_destiny/create-destiny/create-destiny.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import { PaqueteTuristicoCreateComponent } from './pages/paquete_turistico/paquete-turistico-create/paquete-turistico-create.component';
import { PaqueteTuristicoEditComponent } from './pages/paquete_turistico/paquete-turistico-edit/paquete-turistico-edit.component';
import { CircuitoVistaDestinosComponent } from './pages/circuito-vista-destinos/circuito-vista-destinos.component';
import { AgencyService } from './services/agency.service';
import { TouristDestinyService } from './services/touristDestiny.service';
import { PagerService } from './services/pager.service';
import { ItinerarioComponent } from './pages/itinerario/itinerario.component';
import { CircuitoTuristicoEditComponent } from './pages/circuito_turistico/circuito-turistico-edit/circuito-turistico-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDestinyComponent,
    PaqueteTuristicoCreateComponent,
    PaqueteTuristicoEditComponent,
    CircuitoVistaDestinosComponent,
    ItinerarioComponent,
    CircuitoTuristicoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AgencyService, TouristDestinyService, PagerService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
