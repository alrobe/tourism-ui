import { Component, OnInit } from '@angular/core';
import { PackagesService } from '../../../services/packages.service';
import { Paquete } from '../../../model/paquete';
import { Observer } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

import { PagerService } from '../../../services/pager.service'

@Component({
  selector: 'app-paquetes-buscados',
  templateUrl: './paquetes-buscados.component.html',
  styleUrls: ['./paquetes-buscados.component.css']
})
export class PaquetesBuscadosComponent implements OnInit {

  paquetesBuscados:Paquete[]=[];
  termino:string;

  pager: any = {};
  pagedItems: any[];

  constructor(private _activatedRouter:ActivatedRoute,private _turismoServicios:PackagesService,private router:Router, private pagerService: PagerService) { }

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
            let nombre = data[i].nombre.toLocaleLowerCase();
            if(nombre.indexOf(this.termino)>=0){
                data[i].id=data[i].id;
                paquetes.push(data[i]);
            }
        }
        this.paquetesBuscados=paquetes;
        if(this.pager.currentPage = undefined)
        {
          this.setPage(1);
        }
        else
        {
          this.setPage(this.pager.currentPage);
        }
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

  this.setPage(1);
  }

  verPaquete(index:number){
    this.router.navigate(['/paquetes/paqueteTuristico',index]);
  }

  buscarPaquete(nombre:string){
    this.router.navigate(['/paquetes/paquetesBuscados',nombre]);
    
    this.ngOnInit();
  }

  setPage(page: number) {
    this.pager = this.pagerService.getPager(this.paquetesBuscados.length, page);
    console.log(this.pager);
    this.pagedItems = this.paquetesBuscados.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}