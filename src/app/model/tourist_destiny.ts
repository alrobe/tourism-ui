import { Province } from './province'

export class TouristDestiny {
    id: number;
    name: string;
    coordinates: string;
    
    province: Province;

    constructor(id: number, name: string, coordinates: string, province: Province) {
        this.name = name;
        this.province = province;
        this.coordinates = coordinates
    }
}
