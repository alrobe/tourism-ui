import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PaqueteService} from "../../../services/paquete.service";
import {Paquete} from "../../../model/paquete";
import {Foto} from "../../../model/foto";
import {Servicio} from '../../../model/servicio';
import {Circuito} from "../../../model/circuito";
import {Itinerario} from "../../../model/itinerario";

@Component({
  selector: 'app-paquete-turistico-edit',
  templateUrl: './paquete-turistico-edit.component.html',
  styleUrls: ['./paquete-turistico-edit.component.css']
})
export class PaqueteTuristicoEditComponent implements OnInit {

  submitted = false;
  images_loaded = false;
  visibleAlert = false;

  model: Paquete = new Paquete();
  fotos: Foto[] = [];
  servicios: Servicio[];
  circuitos: Circuito[];
  itinerario: Itinerario;

  constructor(private service: PaqueteService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getPaquete(+this.route.snapshot.params.id).subscribe(
      response => {
        this.model = response;
        if (this.model.fotos) {
          this.loadFotos(this.model.fotos);
        }
      },
      error => {
        console.log(error);
      }
    );
    //this.model = this.service.getPaquete(+this.route.snapshot.params.id);
    this.servicios = this.service.getServicios();
    this.circuitos = this.service.getCircuitos();
    this.itinerario = this.service.getItinerario();
    if (this.model.fotos) {
      this.loadFotos(this.model.fotos);
    }
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
    console.log(this.fotos);
  }

  delete() {
    console.log(this.model.id);
    this.service.deletePaquete(this.model.id).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

  compareService(s1: Servicio, s2: Servicio): boolean {
    return s1 && s2 ? s1.nombre === s2.nombre : s1 === s2;
  }

  compareCircuito(c1: Circuito, c2: Circuito): boolean {
    return c1 && c2 ? c1.nombre === c2.nombre : c1 === c2;
  }

  loadFotos (fotos: Foto[]) {
    this.fotos = fotos;
    this.images_loaded = true;
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

}
