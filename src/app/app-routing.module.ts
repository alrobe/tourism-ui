import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDestinyComponent } from './pages/tourist_destiny/create-destiny/create-destiny.component'
import { AuthGuardService } from './services/auth-guard.service';
import {PaqueteTuristicoCreateComponent} from "./pages/paquete_turistico/paquete-turistico-create/paquete-turistico-create.component";
import {PaqueteTuristicoEditComponent} from "./pages/paquete_turistico/paquete-turistico-edit/paquete-turistico-edit.component";
import { CircuitoVistaDestinosComponent } from './pages/circuito-vista-destinos/circuito-vista-destinos.component';
import { DestiniesComponent } from './pages/tourist_destiny/destinies/destinies.component';
import { DestinyInfoComponent } from './pages/tourist_destiny/destiny-info/destiny-info.component';
import { ItinerarioComponent } from './pages/itinerario/itinerario.component';
import {CircuitoTuristicoEditComponent} from "./pages/circuito_turistico/circuito-turistico-edit/circuito-turistico-edit.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './pages/home/home.module#HomeModule'
  },
  {
    path: 'agency',
    loadChildren: './pages/agency/agency.module#AgencyModule'
  },
  {
    path: 'destinies', component: DestiniesComponent,
  },
  {
    path: 'destinies',
    children: [
      { path: 'create', component: CreateDestinyComponent },
      { path: ':destinyId', component: DestinyInfoComponent },
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
      { path: ':id', component: ItinerarioComponent}
    ]
  },
  {
    path: 'circuito-turistico',
    children: [
      { path: ':id/editar', component: CircuitoTuristicoEditComponent},
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
