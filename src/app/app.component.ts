import { Component } from '@angular/core';
import { from } from 'rxjs';

//agencia
import {Agency} from './model/agency';

//service
import { AgencyService } from './services/agency.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tourism-ui';

  constructor (private agencyService: AgencyService){
  }

}


