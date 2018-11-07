import { Province } from './province'

export class TouristDestiny {
    id: number;
    name: string;
    coordinates: string;
    lodging: string;
    internet: string;
    weather: string;
    feeding: string;
    timeTravel: string;

    province: Province;

    constructor(name: string, coordinates: string,lodging: string, internet: string, weather: string, feeding: string, timeTravel: string, province: Province) {
        this.name = name;
        this.province = province;
        this.coordinates = coordinates;
        this.lodging = lodging;
        this.internet = internet;
        this.weather = weather;
        this.feeding = feeding;
        this.timeTravel = timeTravel;
    }
}
