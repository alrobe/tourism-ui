import { Injectable } from '@angular/core';
import { Paquete } from '../model/paqueteTuristico/paquete';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Calificacion } from '../model/paqueteTuristico/calificacion';

const API_URL_PACKAGE='http://localhost:8080/paquete';
const API_URL_PACKAGES='http://localhost:8080/paquetes';
@Injectable({
  providedIn: 'root'
})
export class PackagesService {
 
  constructor(private httpClient:HttpClient) { }

  getPaquete(id:number):Observable<Paquete>{
    return this.httpClient.get<Paquete>(`${API_URL_PACKAGE}/${id}`);
  }

  getPaquetes():Observable<Paquete[]>{
    return this.httpClient.get<Paquete[]>(API_URL_PACKAGES);
  }
  
  setComentario(calificacion:Calificacion):Observable<Calificacion>{
    return this.httpClient.post<Calificacion>(API_URL_PACKAGE,calificacion);
  }
}