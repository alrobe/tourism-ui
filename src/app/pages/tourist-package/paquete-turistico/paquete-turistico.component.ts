import { Component, OnInit } from '@angular/core';
import { Paquete } from '../../../model/paqueteTuristico/paquete';
import { Observer} from 'rxjs';
import { PackagesService } from '../../../services/packages.service';
import { ActivatedRoute } from '@angular/router';
import { Calificacion } from 'src/app/model/paqueteTuristico/calificacion';

@Component({
  selector: 'app-paquete-turistico',
  templateUrl: './paquete-turistico.component.html',
  styleUrls: ['./paquete-turistico.component.css']
})
export class PaqueteTuristicoComponent implements OnInit {

  promedioPuntuacion:number;
  paquete:Paquete;
  index:number;
  calificacion:Calificacion;

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
        this.promediarPuntuacion();
      }
    };
    this._turismoService.getPaquete(this.index)
    .subscribe(observador);

    
  }

  promediarPuntuacion():void{
    let cal= this.paquete.calificaciones;
    let total;
    let promedio;
    let cont=0;
    for(let i=0;i<cal.length;i++){
      if(cal[i].valor!=0){
        total = total + cal[i].valor;
        cont++;
      }
    }
    promedio=total/cont;
    this.promedioPuntuacion=promedio;
  }

  comentar(){
    console.log(this.calificacion);
  }
}