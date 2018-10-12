import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TouristDestiny } from './../model/tourist_destiny';

@Injectable({
    providedIn: 'root'
})
export class TouristDestinyService{
    baseUrl: string = 'http://localhost:8080/destinations';

    constructor(private http: HttpClient){
        
    }

    updateDestiny(destiny: TouristDestiny){
        return this.http.put(this.baseUrl + '/' + destiny.id, destiny);
    }

    deleteDestiny(id: String){
        return this.http.delete(this.baseUrl+'/'+id);
    }
}

