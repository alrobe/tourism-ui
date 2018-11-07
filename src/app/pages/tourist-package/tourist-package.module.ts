import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TouristPackageRoutingModule } from './tourist-package-routing.module';
import { PaquetesBuscadosComponent } from './paquetes-buscados/paquetes-buscados.component';
import { TarjetaPaqueteComponent } from './tarjeta-paquete/tarjeta-paquete.component';
import { PaqueteTuristicoComponent } from './paquete-turistico/paquete-turistico.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TouristPackageRoutingModule,
    FormsModule
  ],
  declarations: [
    PaquetesBuscadosComponent,
    TarjetaPaqueteComponent,
    PaqueteTuristicoComponent
  ]
})
export class TouristPackageModule { }
