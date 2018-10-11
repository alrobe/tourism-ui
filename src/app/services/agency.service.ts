import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Agency } from './../model/agency';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {

baseUrl: string = 'http://localhost:8080/agency';

  constructor(private http: HttpClient) {
  }

   createAgency(agency: Agency){
      return this.http.post(this.baseUrl, agency);
  }
}
