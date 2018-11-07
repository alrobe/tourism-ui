export class TouristDestiny {
    id: number;
    name: string;
    description: string;
    coordinates: string;
    department: string;
    province: string;
    locality: string;
    weather: string;
    availableService: string;
    travelTime: string;


    constructor(name: string, description: string, coordinates: string, department: string, province: string, locality: string, weather: string, availableService: string, travelTime: string) {

        this.name = name;
        this.description = description;
        this.coordinates = coordinates;
        this.department = department;
        this.province = province;
        this.locality = locality;
        this.weather = weather;
        this.availableService = availableService;
        this.travelTime = travelTime;
    }
}

