import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaqueteTuristicoComponent } from './paquete-turistico/paquete-turistico.component';
import { PaquetesBuscadosComponent } from './paquetes-buscados/paquetes-buscados.component';

const routes: Routes = [
  {path: ''},
  { path: 'paqueteTuristico/:id', component: PaqueteTuristicoComponent },
  { path: 'paquetesBuscados/:nombre' , component: PaquetesBuscadosComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TouristPackageRoutingModule { }
