import { Injectable } from '@angular/core';
import { Paquete } from '../model/paquete';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Calificacion } from '../model/calificacion';
import { Servicio } from '../model/servicio';

const API_URL_PACKAGE='http://localhost:8080/paquete';
const API_URL_PACKAGES='http://localhost:8080/paquetes';
const API_URL_COMENT="http://localhost:8080/calificacion";
const API_URL_CSERV="http://localhost:8080/servicio";
const API_URL_DSERV="http://localhost:8080/servicio/eliminar";

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
    return this.httpClient.post<Calificacion>(API_URL_COMENT,calificacion);
  }

  setServicio(servicio:Servicio):Observable<Servicio>{
    return this.httpClient.post<Servicio>(API_URL_CSERV,servicio);
  }

  deleteServicio(id:number):Observable<Servicio>{
    return this.httpClient.delete<Servicio>(`${API_URL_DSERV}/${id}`);
  }
}
