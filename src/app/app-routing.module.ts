import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDestinyComponent } from './pages/tourist_destiny/create-destiny/create-destiny.component'
import {PaqueteTuristicoCreateComponent} from "./pages/paquete_turistico/paquete-turistico-create/paquete-turistico-create.component";
import {PaqueteTuristicoEditComponent} from "./pages/paquete_turistico/paquete-turistico-edit/paquete-turistico-edit.component";
import { CircuitoVistaDestinosComponent } from './pages/circuito-vista-destinos/circuito-vista-destinos.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'agency',
    loadChildren: './pages/agency/agency.module#AgencyModule'
  },
  {
    path: 'tourist-destiny',
    children: [
      { path: 'create', component: CreateDestinyComponent}
    ]
  },
  {
    path: 'paquete-turistico',
    children: [
      { path: 'crear', component: PaqueteTuristicoCreateComponent},
      { path: ':id/editar', component: PaqueteTuristicoEditComponent}
    ]
  },
  {
    path: 'circuito/:id',
    children: [
      { path: 'verDestinos', component: CircuitoVistaDestinosComponent}
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
