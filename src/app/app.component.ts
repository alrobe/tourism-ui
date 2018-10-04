import { Component } from '@angular/core';
//agencia
import {Agencia} from './modelAgencia/angencia.model'

//service
import { AgenciaService } from './agencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tourism-ui';

  constructor ( agenciaService: AgenciaService){

  }

}
