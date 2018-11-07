import {Foto} from "./foto";
import {Servicio} from "./servicio";
import {Circuito} from "./circuito";
import {Calificacion} from "./calificacion";
import {Itinerario} from "./itinerario";

export class Paquete {
  id?: number;
  nombre: string;
  precio: number;
  descripcion: string;
  fotos?: Foto[];
  servicios?: Servicio[];
  circuitos?: Circuito[];
  calificaciones?: Calificacion[];
  itinerario?: Itinerario;
}
