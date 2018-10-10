import { Injectable } from '@angular/core';
import { Paquete } from '../model/agency';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL='http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {
 
  constructor(private httpClient:HttpClient) { }

  getPaquete(id:number):Observable<Paquete>{
    return this.httpClient.get<Paquete>(`${API_URL}/${id}`);
  }
}
