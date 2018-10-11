import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { RegisterAgencyComponent } from './register-agency/register-agency.component';
import { PaqueteTuristicoComponent } from './paquete-turistico/paquete-turistico.component';
@NgModule({
  imports: [
    CommonModule,
    AgencyRoutingModule,
    
  ],
  declarations: [
    RegisterAgencyComponent,
    PaqueteTuristicoComponent
  ]
})
export class AgencyModule { }
