import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateDestinyComponent } from './pages/tourist_destiny/create-destiny/create-destiny.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDestinyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
