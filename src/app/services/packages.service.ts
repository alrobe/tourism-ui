import { Injectable } from '@angular/core';
import { Paquete } from '../model/packages';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL_PACKAGE='http://localhost:8080/package';
const API_URL_PACKAGES='http://localhost:8080/package/all';
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
  
}