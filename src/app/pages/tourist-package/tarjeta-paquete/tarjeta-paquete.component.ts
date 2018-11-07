import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';
import { Paquete } from '../../../model/paqueteTuristico/paquete';

@Component({
  selector: 'app-tarjeta-paquete',
  templateUrl: './tarjeta-paquete.component.html',
  styleUrls: ['./tarjeta-paquete.component.css']
})
export class TarjetaPaqueteComponent implements OnInit {

  @Input() paquete:Paquete;
  @Input() index:number;

  @Output() paqueteSeleccionado:EventEmitter<number>;
  constructor() { 
    this.paqueteSeleccionado=new EventEmitter();
  }

  ngOnInit() {
  }
  verPaquete(){
    this.paqueteSeleccionado.emit(this.index)
  }

}
