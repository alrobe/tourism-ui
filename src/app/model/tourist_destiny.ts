import { Province } from './province'

export class TouristDestiny {
    name: string;
    coordinates: string;
    
    province: Province;

    constructor(name: string, coordinates: string, province: Province) {
        this.name = name;
        this.province = province;
        this.coordinates = coordinates
    }
}
