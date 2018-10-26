import { Component, OnInit } from '@angular/core';
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

  model: Paquete = new Paquete();
  fotos: Foto[] = [];
  servicios: Servicio[];
  circuitos: Circuito[];
  itinerario: Itinerario;

  constructor(private service: PaqueteService) {}

  parseToArray(data) {
    // Step 1. Get all the object keys.
    let dataProps = Object.keys(data);
    // Step 2. Create an empty array.
    let objectParsed = [];
    // Step 3. Iterate throw all keys.
    for (let prop of dataProps) {
      objectParsed.push(data[prop]);
    }
    return objectParsed;
  }

  ngOnInit() {
    this.servicios = this.parseToArray(this.service.getServicios());
    this.circuitos = this.parseToArray(this.service.getCircuitos());
    this.itinerario = this.service.getItinerario();
  }

  onSubmit() {
    this.submitted = true;
    this.model.fotos = this.fotos;
    console.log('hey mandar back');
    console.log(this.model);
    //this.service.saveData(this.model).subscribe(paquete => console.log(paquete));
  }

  onFileChange(e) {

    if (e.target.files && e.target.files.length > 0) {

      const files = e.target.files;
      for (const file of files) {
        const reader = new FileReader();
        reader.onload = () => {
          console.log('se agrego correctamente');
          let foto: Foto = new Foto();
          foto.nombre = file.name;
          foto.tipo = file.type;
          foto.data = reader.result;

          this.fotos.push(foto);
        };
        reader.readAsDataURL(file);
      }
    }
  }

  //get diagnostic() { return JSON.stringify(this.model); }

}
