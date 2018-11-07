import { Injectable } from '@angular/core';
import { Circuit } from '../model/circuit';
import { HttpClient } from '@angular/common/http';
const API_URL_CIRCUIT='http://localhost:8080/circuito/';
@Injectable({
  providedIn: 'root'
})
export class CircuitoService {
  constructor(private httpClient:HttpClient) { }
  getCircuito(circuitoId)
  {
    return this.httpClient.get<Circuit>("http://localhost:8080/circuito/"+circuitoId.toString());
  }
}
