import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PaqueteTuristicoComponent } from './components/paquete-turistico/paquete-turistico.component';

const routes:Routes=[
    { path: 'home', component: HomeComponent },
    { path: 'paqueteTuristico', component: PaqueteTuristicoComponent },
    { path: '**', pathMatch:'full', redirectTo:'home'},

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
