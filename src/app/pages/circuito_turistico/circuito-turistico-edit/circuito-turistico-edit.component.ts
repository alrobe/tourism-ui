import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { CircuitoService } from "../../../services/circuito.service";
import { DestinoService } from "../../../services/destino.service";
import { Circuito } from "../../../model/circuito";

@Component({
  selector: 'app-circuito-turistico-edit',
  templateUrl: './circuito-turistico-edit.component.html',
  styleUrls: ['./circuito-turistico-edit.component.css']
})
export class CircuitoTuristicoEditComponent implements OnInit {

  model: Circuito = new Circuito();
  destinos: any[];
  allDestinos: any[];
  visibleAlert = false;
  message:string;


  constructor(
    private serviceCircuito: CircuitoService,
    private serviceDestino: DestinoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.serviceCircuito.getCircuitoAndDestinos(+this.route.snapshot.params.id).subscribe(
      response => {
        this.model = response[0];
        this.destinos = this.model.destinoTuristicos;
        //this.allDestinos = response[1].filter(destino => !this.destinos.find(d => destino.id == d.id));
        // this.allDestinos = this.filterDestinos(response[1]);
        this.allDestinos = response[1];
      },
      error => {
        console.log('error en la llamada multiple de Observable');
      }
    );

    // this.serviceCircuito.getCircuitoTuristico(+this.route.snapshot.params.id).subscribe(
    //   response => {
    //     this.model = response;
    //     this.destinos = response.destinoTuristicos;
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
    // // aka traer todos los destinos
    // this.serviceDestino.getDestinosTuristicos().subscribe(
    //   response => {
    //     // lo de abajo...quita los destinos presentes en el circuito
    //     //https://stackoverflow.com/questions/40998880/get-the-different-of-arrays-in-es6
    //     this.allDestinos = response.filter(destino => !this.destinos.find(d => destino.id == d.id));
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );
  }

  filterDestinos(destinos) {
    return destinos.filter(destino => !this.destinos.find(d => destino.id == d.id));
  }

  onSubmit() {
    console.log('actualizando');
    console.log(this.model);
    this.serviceCircuito.updateCircuitoTuristico(+this.route.snapshot.params.id, this.model).subscribe(
      response => {
        console.log(response);
        this.message = "Circuito turistico Actualizado correctamente";
        this.visibleAlert = true;
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 2000);
      },
      error => {
        console.log(error);
      }
    );
  }

  delete() {
    console.log(this.model.id);
    this.serviceCircuito.deleteCircuitoTuristico(this.model.id).subscribe(
      response => {
            this.message = "Circuito turistico Eliminado correctamente";
            this.visibleAlert = true;
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 2000);
      },
      error => {
       console.log(error);
      }
    );
  }

  addDestino(id: number) {
    this.destinos.push(this.allDestinos[id]);
    this.allDestinos = this.filterDestinos(this.allDestinos);
  }

  deleteDestino(id: number) {
    this.destinos.splice(id,1);
    this.allDestinos = this.filterDestinos(this.allDestinos);
  }

  cancel() {
    this.router.navigate(['/']);
  }

  showBeforeModal(e: any) {
    this.allDestinos = this.filterDestinos(this.allDestinos);
  }
}
