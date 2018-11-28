import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItinerarioService } from 'src/app/services/itinerario.service';
import { Itinerario } from "../../model/itinerario";

@Component({
  selector: 'app-itinerario',
  templateUrl: './itinerario.component.html',
  styleUrls: ['./itinerario.component.css']
})
export class ItinerarioComponent implements OnInit {
    
  itinerario$: Object;
  actividad$: string = "";
  paquete: string = 'Paquete Turistico Fake';
  model: Itinerario = new Itinerario();

  constructor(private itinerarioService: ItinerarioService, private route: ActivatedRoute) {}

  ngOnInit() {
      this.itinerarioService.getItinerario(+this.route.snapshot.params.id).subscribe(
        response => {
          this.model = response;
        },
        error => {
          console.log(error);
        }
      );
  }

  show(actividad)
  {
    this.actividad$ = JSON.stringify(actividad);;
  }
}
