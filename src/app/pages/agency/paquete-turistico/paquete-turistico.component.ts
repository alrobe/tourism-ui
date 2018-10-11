import { Component, OnInit } from '@angular/core';
import { Paquete } from '../../../model/packages';
import { Observer} from 'rxjs';
import { PackagesService } from '../../../services/packages.service';
@Component({
  selector: 'app-paquete-turistico',
  templateUrl: './paquete-turistico.component.html',
  styleUrls: ['./paquete-turistico.component.css']
})
export class PaqueteTuristicoComponent implements OnInit {


  paquete:Paquete;

  constructor(private _turismoService:PackagesService) { }
  ngOnInit() {
    let observador:Observer<Paquete>={
      next: (data) => {
        console.log(data);
        this.paquete=data;
      },
      error: (error) => {
        console.log(error);
        console.log('se produjo el siguiente error al recuperar un paquete');
      },
      complete: () => {
        console.log('proceso finalizado');
      }
    };
    this._turismoService.getPaquete(1)
    .subscribe(observador);
  }
  imprimir(){
    console.log(this.paquete);
  }
}