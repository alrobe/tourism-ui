import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TurismoService {

  private paquetes:Paquete[]=[
  {
    nombre:'chapare',
    duracion:'dos semanas',
    precios:58,
    descripcion:"paises hermosos",
    circuito:'chapareno',
    itinerario:'10 partimos',
    servicios:'comida, alojamiento',
    fotos:'assets/img/chapare.jpg',
    video:'',
    comentarios:'hermosa vista',
    calificaciones:2
  }
  ];
  constructor() { }

  getPaquete():Paquete{
    return this.paquetes[0];
    console.log(this.paquetes[0]);
  }
}



export interface Paquete{
  nombre:string,
  duracion:string,
  precios:number,
  descripcion:string,
  circuito:string,
  itinerario:string,
  servicios:string,
  fotos:string,
  video:string,
  comentarios:string,
  calificaciones:number
}