import { Component, OnInit } from '@angular/core';
import { TurismoService, Paquete } from '../../servicios/turismo.service';

@Component({
  selector: 'app-paquete-turistico',
  templateUrl: './paquete-turistico.component.html',
  styleUrls: ['./paquete-turistico.component.css']
})
export class PaqueteTuristicoComponent implements OnInit {


  paquete:Paquete;
  constructor(private _turismoService:TurismoService) { }

  ngOnInit() {
    this.paquete=this._turismoService.getPaquete();
  }



}
