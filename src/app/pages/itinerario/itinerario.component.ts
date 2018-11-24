import { Component, OnInit } from '@angular/core';
import {ItinerarioService } from 'src/app/services/itinerario.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrls: ['./itinerario.component.css']
})
export class ItinerarioComponent implements OnInit {
    
  itinerario$: Object;
  actividad$: string = "";
  constructor(private itinerarioService: ItinerarioService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.itinerario$ = params.id)
  }

  ngOnInit() {
    
      /*this.itinerarioService.getItinerario(this.itinerario$).subscribe((data)=>{
        this.itinerario$ = data;
      });*/
      this.itinerario$ = this.itinerarioService.getItinerario(this.itinerario$);
      console.log(this.itinerario$);
  }

  show(actividad)
  {
    this.actividad$ = JSON.stringify(actividad);;
  }
}
