import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tourism-ui';
  constructor(public auth:AuthService){
    auth.handleAuthentication();
  }
  login(){
    this.auth.login();
  }
  salir(){
    this.auth.logout();
  }

}
