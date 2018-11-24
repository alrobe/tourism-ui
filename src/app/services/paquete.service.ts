import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Paquete} from "../model/paquete";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

const url = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class PaqueteService {

  constructor(private http: HttpClient) { }

  getPaquetes() {
    return [
      {
        nombre: "Paquete #1",
        precio: 234.12,
        descripcion: "la descripcion completa de este PT",
        fotos: [
          {
            nombre: "foto nombre",
            tipo: "image/png",
            data: "fulldata image"
          },
          {
            nombre: "foto nombre",
            tipo: "image/png",
            data: "fulldata image"
          },
          {
            nombre: "foto nombre",
            tipo: "image/png",
            data: "fulldata image"
          },
          {
            nombre: "foto nombre",
            tipo: "image/png",
            data: "fulldata image"
          }
        ]
      },
      {
        nombre: "Paquete #1",
        precio: 234.12,
        descripcion: "la descripcion completa de este PT",
        fotos: [
          {
            nombre: "foto nombre",
            tipo: "image/png",
            data: "fulldata image"
          },
          {
            nombre: "foto nombre",
            tipo: "image/png",
            data: "fulldata image"
          },
          {
            nombre: "foto nombre",
            tipo: "image/png",
            data: "fulldata image"
          },
          {
            nombre: "foto nombre",
            tipo: "image/png",
            data: "fulldata image"
          }
        ]
      },
      {
        nombre: "Paquete #1",
        precio: 234.12,
        descripcion: "la descripcion completa de este PT",
        fotos: [
          {
            nombre: "foto nombre",
            tipo: "image/png",
            data: "fulldata image"
          },
          {
            nombre: "foto nombre",
            tipo: "image/png",
            data: "fulldata image"
          },
          {
            nombre: "foto nombre",
            tipo: "image/png",
            data: "fulldata image"
          },
          {
            nombre: "foto nombre",
            tipo: "image/png",
            data: "fulldata image"
          }
        ]
      },
      {
        nombre: "Paquete #1",
        precio: 234.12,
        descripcion: "la descripcion completa de este PT",
        fotos: [
          {
            nombre: "foto nombre",
            tipo: "image/png",
            data: "fulldata image"
          },
          {
            nombre: "foto nombre",
            tipo: "image/png",
            data: "fulldata image"
          },
          {
            nombre: "foto nombre",
            tipo: "image/png",
            data: "fulldata image"
          },
          {
            nombre: "foto nombre",
            tipo: "image/png",
            data: "fulldata image"
          }
        ]
      }
    ];
  }

  getServicios() {
    return [
      {nombre:"servicio #1"},
      {nombre:"servicio #2"},
      {nombre:"servicio #3"},
      {nombre:"servicio #4"},
      {nombre:"servicio #5"},
      {nombre:"servicio #6"},
    ];
  }

  getCircuitos() {
    return [
      {nombre:"circuito #1"},
      {nombre:"circuito #2"},
      {nombre:"circuito #3"},
      {nombre:"circuito #4"},
      {nombre:"circuito #5"},
      {nombre:"circuito #6"},
    ];
  }

  getItinerario() {
    //new Date().toJSON().slice(0, 10)
    //new Date().toJSON().slice(11, 20)
    return {nombre:"itinerario", fechaInicio:"2018-10-25",fechaFin:"2018-10-29",horaInicio:"16:05:00",horaFin:"16:05:00", actividades:[]};
  }

  saveData(paquete: Paquete): Observable<Paquete> {
    return this.http.post<Paquete>('http://localhost:8080/paquete', paquete, httpOptions);
  }
  getPaquete(id: number) {
    return this.http.get<Paquete>(`${url}/paquete/${id}`, httpOptions);
  }

  deletePaquete(id: number) {
    return this.http.delete(`${url}/paquete/${id}`, httpOptions);
  }

  updatePaquete(id: number, paquete: Paquete): Observable<any> {
    return this.http.put(`${url}/paquete/${id}`, paquete, httpOptions);
  }
}
