import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterAgencyComponent } from './register-agency/register-agency.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterAgencyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgencyRoutingModule { }