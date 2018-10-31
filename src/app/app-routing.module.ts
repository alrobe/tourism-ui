import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDestinyComponent } from './pages/tourist_destiny/create-destiny/create-destiny.component'
import {PaqueteTuristicoCreateComponent} from "./pages/paquete_turistico/paquete-turistico-create/paquete-turistico-create.component";
import {PaqueteTuristicoAdministrarComponent} from "./pages/paquete_turistico/paquete-turistico-administrar/paquete-turistico-administrar.component";


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
      { path: 'crear', component: PaqueteTuristicoCreateComponent}
    ]
  },
  {
    path: 'paquete-turistico',
    children: [
      { path: 'administrar', component: PaqueteTuristicoAdministrarComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
