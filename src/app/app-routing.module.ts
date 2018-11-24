import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDestinyComponent } from './pages/tourist_destiny/create-destiny/create-destiny.component'
import { AuthGuardService } from './services/auth-guard.service';
import {PaqueteTuristicoCreateComponent} from "./pages/paquete_turistico/paquete-turistico-create/paquete-turistico-create.component";
import {PaqueteTuristicoEditComponent} from "./pages/paquete_turistico/paquete-turistico-edit/paquete-turistico-edit.component";
import { CircuitoVistaDestinosComponent } from './pages/circuito-vista-destinos/circuito-vista-destinos.component';
import { ItinerarioComponent } from './pages/itinerario/itinerario.component';

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
  { path: 'paquetes', loadChildren: './pages/tourist-package/tourist-package.module#TouristPackageModule', canActivate: [AuthGuardService] },
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
  {
    path: 'itinerario',
    children: [
      { path: 'ver/:id', component: ItinerarioComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
