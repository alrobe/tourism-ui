import { Injectable } from '@angular/core';
import { Itinerario } from '../model/itinerario';
import { HttpClient } from '@angular/common/http';
const API_URL_CIRCUIT='http://localhost:8080/itinerario/';
@Injectable({
  providedIn: 'root'
})
export class ItinerarioService {
  constructor(private httpClient:HttpClient) { }
  itinerarios = [1,2,3,4];
  getItinerario(itinerarioId)
  {
    //return this.httpClient.get<Itinerario>("http://localhost:8080/itinerario/"+itinerarioId.toString());
    return this.itinerarios[itinerarioId];
  }
}
