import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PaqueteService} from "../../../services/paquete.service";
import {Paquete} from "../../../model/paquete";
import {Foto} from "../../../model/foto";
import {Servicio} from '../../../model/servicio';
import {Circuito} from "../../../model/circuito";
import {Itinerario} from "../../../model/itinerario";

@Component({
  selector: 'app-paquete-turistico-create',
  templateUrl: './paquete-turistico-create.component.html',
  styleUrls: ['./paquete-turistico-create.component.css']
})
export class PaqueteTuristicoCreateComponent implements OnInit {

  submitted = false;
  images_loaded = false;
  visibleAlert = false;

  model: Paquete = new Paquete();
  fotos: Foto[] = [];
  servicios: Servicio[];
  circuitos: Circuito[];
  itinerario: Itinerario;

  constructor(private service: PaqueteService, private router: Router) {}

  ngOnInit() {
    this.servicios = this.service.getServicios();
    this.circuitos = this.service.getCircuitos();
    this.itinerario = this.service.getItinerario();
  }

  onSubmit() {
    this.submitted = true;
    this.model.fotos = this.fotos;
    console.log(this.model);
    this.service.saveData(this.model).subscribe(
      response => {
        this.visibleAlert = true;
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 3000);
      },
      error => {
        console.log('hubo un error, aka se procesa el error');
        console.log(error);
        // lo de abajo seria como un ejemplo..si hay error ,guardar en error
        //this.errors = error
      },
      () => {
        console.log('esto siempre se procesa,similar al finally de try catch');
      }
    );
    //if (!this.errors) {
      //route to new page
    //}
  }

  cancel() {
    this.router.navigate(['/']);
  }

  onFileChange(e) {

    if (e.target.files && e.target.files.length > 0) {
      const files = e.target.files;
      for (const file of files) {
        if (! (['image/png', 'image/jpeg', 'image/jpg'].includes(file.type))) continue;
        const reader = new FileReader();
        reader.onload = () => {
          let foto: Foto = new Foto();
          foto.nombre = file.name;
          foto.tipo = file.type;
          foto.data = reader.result;
          this.fotos.push(foto);
        };
        reader.readAsDataURL(file);
      }
      this.images_loaded = true;
    }
  }

  removeFoto(index) {
    this.fotos.splice(index,1);
  }

  //get diagnostic() { return JSON.stringify(this.model); }

}
