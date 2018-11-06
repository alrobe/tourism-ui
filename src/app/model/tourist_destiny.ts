import { Province } from './province'

export class TouristDestiny {
    name: string;
    description: string;
    coordinates: string;    
    province: Province;

    constructor(name: string, description: string, coordinates: string, province: Province) {
        this.name = name;
        this.description = description;
        this.province = province;
        this.coordinates = coordinates
    }
}
