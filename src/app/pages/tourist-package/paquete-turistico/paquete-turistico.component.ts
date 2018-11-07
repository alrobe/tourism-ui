import { Component, OnInit } from '@angular/core';
import { Paquete } from '../../../model/paqueteTuristico/paquete';
import { Observer} from 'rxjs';
import { PackagesService } from '../../../services/packages.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  calificacion:Calificacion={
    id:null,
    valor:0,
    comentario:"",
    paqueteTuristicoId:0
  };

  constructor(private _activatedRouter:ActivatedRoute,private _turismoService:PackagesService,private _router:Router) { }
  ngOnInit() {
    this._activatedRouter.params.subscribe(
      params => {
        this.calificacion.paqueteTuristicoId=params['id'];
      }
    );
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
    let total=0;
    let promedio;
    let cont=0;
    for(let i=0;i<cal.length;i++){
        total = total + cal[i].valor;
        console.log(total);
        cont++;
        console.log(cont);
    }
    promedio=total/cont;
    this.promedioPuntuacion=promedio;
  }

  comentar(){
    let observador:Observer<Calificacion>={
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log('se produjo el siguiente error al repuerar la lista de los paquetes');
      },
      complete: () => {
        console.log('proceso finalizado');
      }
  };
  this._turismoService.setComentario(this.calificacion)
  .subscribe(observador);
    console.log(this.calificacion);
    this._router.navigate(['/paquetes/paquetesBuscados/a']);
  }
  
}