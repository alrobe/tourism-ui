import { Injectable } from '@angular/core';
import { TouristDestiny } from '../model/tourist_destiny';
import { Province } from '../model/province';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {
  destinos: TouristDestiny[] = [
        new TouristDestiny("el cristo","una estatua grande","78:45:14",new Province("cercado")),
        new TouristDestiny("cerro","hay piedras","78:41:14",new Province("tarata")),
        new TouristDestiny("puente","para pasar un rio","78:42:14",new Province("punata")),
        new TouristDestiny("estatua","hecha con piedra caliza","78:45:14",new Province("chaco boreal")),
        new TouristDestiny("parque","lleno de arboles frutales","38:45:14",new Province("chapare")),
        new TouristDestiny("cueva","muy oscura","76:45:14",new Province("toro toro")),
        new TouristDestiny("salar","mejor llevate gafas de sol","48:45:14",new Province("uyuni")),
        new TouristDestiny("cerro2","igual muchas piedras","58:45:14",new Province("sacaba")),
        new TouristDestiny("tren","es muy antiguo","78:45:64",new Province("tin tin")),
        new TouristDestiny("piedra","la mas grande que podras conocer","78:45:74",new Province("carrasco")),
        new TouristDestiny("lugar","es un lugar","78:45:19",new Province("valle grande")),
        ];
  constructor() { }

  getDestinos() {
    return this.destinos;
  }
}
