import {Actividad} from "./actividad";

export class Itinerario {
  id?: number;
  nombre: string;
  fechaInicio: any;
  fechaFin: any;
  horaInicio: any;
  horaFin: any;
  actividades: Actividad[];
}
