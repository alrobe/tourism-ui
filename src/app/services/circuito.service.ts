import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Circuit } from '../model/circuit';
import { Circuito } from "../model/circuito";
import {DestinoService} from "./destino.service";
import {forkJoin} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const API_URL_CIRCUIT='http://localhost:8080/circuito/';
const URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class CircuitoService {

  constructor(private httpClient:HttpClient, private destino: DestinoService) { }

  getCircuito(circuitoId)
  {
    return this.httpClient.get<Circuit>("http://localhost:8080/circuito/"+circuitoId.toString());
  }

  getCircuitoTuristico(id: number) {
    return this.httpClient.get<Circuito>(`${URL}/circuitos-turisticos/${id}`, httpOptions);
  }

  deleteCircuitoTuristico(id: number) {
    return this.httpClient.delete(`${URL}/circuitos-turisticos/${id}`, httpOptions);
  }

  updateCircuitoTuristico(id: number, circuito: Circuito): Observable<any> {
    return this.httpClient.put(`${URL}/circuitos-turisticos/${id}`, circuito, httpOptions);
  }

  //https://medium.com/@swarnakishore/performing-multiple-http-requests-in-angular-4-5-with-forkjoin-74f3ac166d61
  // estoy llamando a dos metodos de este servicio a la vez
  getCircuitoAndDestinos(id: number): Observable<any[]> {
    let circuito = this.httpClient.get<Circuito>(`${URL}/circuitos-turisticos/${id}`, httpOptions);
    let destinos = this.destino.getDestinosTuristicos();
    return forkJoin([circuito, destinos]);
  }
}
