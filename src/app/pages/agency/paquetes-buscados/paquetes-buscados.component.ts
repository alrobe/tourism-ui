import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../../services/packages.service';
import { Paquete } from '../../../model/packages';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-paquetes-buscados',
  templateUrl: './paquetes-buscados.component.html',
  styleUrls: ['./paquetes-buscados.component.css']
})
export class PaquetesBuscadosComponent implements OnInit {

  paquetes:Paquete[];
  paquetesBuscados:Paquete[]=[];
  constructor(private _turismoServicios:PackagesService) { }


  ngOnInit() {
    let observador:Observer<Paquete[]>={
      next: (data) => {
        console.log(data)
        this.paquetes=data;
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
  this.buscarPaquete("paquete1");
  }

  buscarPaquete(termino:string){
    //let paquetesBus:Paquete[]=[];

        termino = termino.toLocaleLowerCase();

        for(let i=0;i<this.paquetes.length;i++){
            let nombre = this.paquetes[i].name.toLocaleLowerCase();
            if(nombre.indexOf(termino)>=0){
                this.paquetes[i].id=i;
                this.paquetesBuscados.push(this.paquetes[i]);
            }
        }
  }

}
