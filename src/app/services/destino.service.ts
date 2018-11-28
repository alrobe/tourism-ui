import { Injectable } from '@angular/core';
import { Destino } from "../model/Destino";
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class DestinoService {

  constructor(private httpClient:HttpClient) { }

  getDestinosTuristicos() {
    return this.httpClient.get<Destino[]>(`${URL}/destinos-turisticos`, httpOptions);
  }

  deleteDestinoTuristico(id: number) {
    console.log('eliminando desde el service');
  }
}
