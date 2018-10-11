import { Injectable } from '@angular/core';
import { Paquete } from '../model/agency';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL_PACKAGES='http://localhost:8090/packages';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {
 
  constructor(private httpClient:HttpClient) { }

  getPaquete(id:number):Observable<Paquete>{
    return this.httpClient.get<Paquete>(`${API_URL_PACKAGES}/${id}`);
  }
  
}
