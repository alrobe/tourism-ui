import { Component, OnInit } from '@angular/core';
import { Paquete } from '../../../model/agency';
import { AgencyService } from '../../../services/agency.service';
import { Observer, observable } from 'rxjs';
@Component({
  selector: 'app-paquete-turistico',
  templateUrl: './paquete-turistico.component.html',
  styleUrls: ['./paquete-turistico.component.css']
})
export class PaqueteTuristicoComponent implements OnInit {


  paquete:Paquete;
  constructor(private _turismoService:AgencyService) { }
  ngOnInit() {
    let observador:Observer<Paquete>={
      next: (data) => {
        console.log(data)
        this.paquete=data;
      },
      error: (error) => {
        console.log('se produjo el siguiente error al recuperar un paquete');
      },
      complete: () => {
        console.log('proceso finalizado');
      }
    };
    this._turismoService.getPaquete(1).subscribe(observador);
  }



}

