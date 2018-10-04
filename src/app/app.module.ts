import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

//service
import { AgenciaService } from './agencia.service'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AgenciaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
