import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Paquete} from "../model/paquete";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

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
      {id:1, nombre:"servicio #1"},
      {id:2, nombre:"servicio #2"},
      {id:3, nombre:"servicio #3"},
      {id:4, nombre:"servicio #4"},
      {id:5, nombre:"servicio #5"},
      {id:6, nombre:"servicio #6"},
    ];
  }

  getCircuitos() {
    return [
      {id:1, nombre:"circuito #1"},
      {id:2, nombre:"circuito #2"},
      {id:3, nombre:"circuito #3"},
      {id:4, nombre:"circuito #4"},
      {id:5, nombre:"circuito #5"},
      {id:6, nombre:"circuito #6"},
    ];
  }

  getItinerario() {
    //new Date().toJSON().slice(0, 10)
    //new Date().toJSON().slice(11, 20)
    return {id:1, nombre:"itinerario", fechaInicio:"2018/10/25",fechaFin:"2018/10/29",horaInicio:"16:05:00",horaFin:"16:05:00"};
  }

  saveData(paquete: Paquete): Observable<Paquete> {
    return this.http.post<Paquete>('http://localhost:8080/paquete', paquete, httpOptions);
  }

  getPaquete(){
    return {
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
        }
      ],
      servicios: [
        {id:1, nombre:"servicio #1"},
        {id:2, nombre:"servicio #2"}
      ],
      circuitos: [
        {id:1, nombre:"circuito #1"},
        {id:2, nombre:"circuito #2"}
      ],
      itinerario: {
        id:1, 
        nombre:"itinerario", 
        fechaInicio:"2018/10/25",
        fechaFin:"2018/10/29",
        horaInicio:"16:05:00",
        horaFin:"16:05:00"
      }
    };
  }
}
