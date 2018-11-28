import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Itinerario } from '../model/itinerario';

const URL = 'http://localhost:8080/itinerarios';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ItinerarioService {

  constructor(private httpClient:HttpClient) { }

  getItinerario(id: number) {
    return this.httpClient.get<Itinerario>(`${URL}/${id}`, httpOptions);
  }
}
