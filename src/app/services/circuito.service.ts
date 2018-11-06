import { Injectable } from '@angular/core';
import { TouristDestiny } from '../model/tourist_destiny';
import { DestinoService } from './destino.service'
import { Circuit } from '../model/circuit';
@Injectable({
  providedIn: 'root'
})
export class CircuitoService {
  destinos: TouristDestiny[] = this.destinoService.getDestinos();
  circuitos: Circuit[] = [
      new Circuit("gran tour", [this.destinos[0],this.destinos[5],this.destinos[2],this.destinos[3],]),
      new Circuit("tour fantastico", [this.destinos[9],this.destinos[8],this.destinos[7],this.destinos[4],]),
      new Circuit("tu tour", [this.destinos[3],this.destinos[4],this.destinos[10],this.destinos[2],]),
      new Circuit("circuito maravilla", [this.destinos[0],this.destinos[1],this.destinos[2],this.destinos[6],]),
      new Circuit("adios estres", [this.destinos[3],this.destinos[2],this.destinos[6],this.destinos[9],]),
      ];
  constructor(private destinoService:DestinoService) { }
  getCircuito(circuitoId)
  {
    return this.circuitos[circuitoId];
  }
}
