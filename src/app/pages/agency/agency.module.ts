import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgencyRoutingModule } from './agency-routing.module';
import { RegisterAgencyComponent } from './register-agency/register-agency.component';

@NgModule({
  imports: [
    CommonModule,
    AgencyRoutingModule
  ],
  declarations: [RegisterAgencyComponent]
})
export class AgencyModule { }
