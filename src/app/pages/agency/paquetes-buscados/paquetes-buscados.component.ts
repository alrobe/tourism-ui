import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../../services/packages.service';
import { Paquete } from '../../../model/packages';
import { Observer } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paquetes-buscados',
  templateUrl: './paquetes-buscados.component.html',
  styleUrls: ['./paquetes-buscados.component.css']
})
export class PaquetesBuscadosComponent implements OnInit {

  paquetesBuscados:Paquete[]=[];
  termino:string;
  constructor(private _activatedRouter:ActivatedRoute,private _turismoServicios:PackagesService,private router:Router) { }

  ngOnInit() {
    this._activatedRouter.params.subscribe(
      params => {
        this.termino=params['nombre'];
      }
    );
    let observador:Observer<Paquete[]>={
      next: (data) => {
        console.log(data);

        let paquetes:Paquete[]=[];
        this.termino = this.termino.toLocaleLowerCase();

        for(let i=0;i<data.length;i++){
            let nombre = data[i].name.toLocaleLowerCase();
            if(nombre.indexOf(this.termino)>=0){
                data[i].id=data[i].categoryId;
                paquetes.push(data[i]);
            }
        }
        this.paquetesBuscados=paquetes;
      },
      error: (error) => {
        console.log('se produjo el siguiente error al repuerar la lista de los paquetes');
      },
      complete: () => {
        console.log('proceso finalizado');
      }
  };
  this._turismoServicios.getPaquetes()
  .subscribe(observador);
  }

  verPaquete(index:number){
    this.router.navigate(['/agency/paqueteTuristico',index])
  }

  buscarPaquete(nombre:string){
    this.router.navigate(['/agency/paquetesBuscados',nombre])
  }
}
