import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateDestinyComponent } from './pages/tourist_destiny/create-destiny/create-destiny.component';
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service'

import { AgencyService } from './services/agency.service';
import { TouristDestinyService } from './services/touristDestiny.service';
import { PagerService } from './services/pager.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateDestinyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AgencyService, TouristDestinyService, PagerService, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
