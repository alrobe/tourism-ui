import { TouristDestiny } from './tourist_destiny';

export class Circuit {
    nombre: string;
    destinos: TouristDestiny[];

    constructor(nombre: string, destinos: TouristDestiny[])
    {
        this.nombre = nombre;
        this.destinos = destinos;
    }
}