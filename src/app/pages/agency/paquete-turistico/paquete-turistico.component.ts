import { Component, OnInit } from '@angular/core';
import { Paquete } from '../../../model/packages';
import { Observer} from 'rxjs';
import { PackagesService } from '../../../services/packages.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-paquete-turistico',
  templateUrl: './paquete-turistico.component.html',
  styleUrls: ['./paquete-turistico.component.css']
})
export class PaqueteTuristicoComponent implements OnInit {


  paquete:Paquete;
  index:number;
  constructor(private _activatedRouter:ActivatedRoute,private _turismoService:PackagesService) { }
  ngOnInit() {
    this._activatedRouter.params.subscribe(
      params => {
        this.index=params['id'];
      }
    );
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
    this._turismoService.getPaquete(this.index)
    .subscribe(observador);
  }
  imprimir(){
    console.log(this.paquete);
  }
}