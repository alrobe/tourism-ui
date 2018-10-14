import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterAgencyComponent } from './register-agency/register-agency.component';
import { PaqueteTuristicoComponent } from './paquete-turistico/paquete-turistico.component';
import { PaquetesBuscadosComponent } from './paquetes-buscados/paquetes-buscados.component';
const routes: Routes = [
  {
    path: '',
    component: RegisterAgencyComponent
  },
  { path: 'paqueteTuristico/:id', component: PaqueteTuristicoComponent },
  { path: 'paquetesBuscados/:nombre' , component: PaquetesBuscadosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }