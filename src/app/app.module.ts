import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CreateDestinyComponent } from './pages/tourist_destiny/create-destiny/create-destiny.component';
import { PaqueteTuristicoCreateComponent } from './pages/paquete_turistico/paquete-turistico-create/paquete-turistico-create.component';
import { PaqueteTuristicoEditComponent } from './pages/paquete_turistico/paquete-turistico-edit/paquete-turistico-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDestinyComponent,
    PaqueteTuristicoCreateComponent,
    PaqueteTuristicoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
