import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateDestinyComponent } from './pages/tourist_destiny/create-destiny/create-destiny.component';

import { AgencyService } from './services/agency.service';
import { TouristDestinyService } from './services/touristDestiny.service';

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
  providers: [AgencyService, TouristDestinyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
