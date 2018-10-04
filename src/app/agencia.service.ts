import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Agencia } from './modelAgencia/angencia.model';

@Injectable({
  providedIn: 'root'
})
export class AgenciaService {
  baseUrl: string = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { 
    console.log('¡service is working!');//prueba
  }

  /*
  getData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }*/

  createAgencia(agencia: Agencia){
    this.http.post(this.baseUrl, agencia);
  }
}
