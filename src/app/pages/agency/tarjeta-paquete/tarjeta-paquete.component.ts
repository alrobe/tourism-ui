import { Component, OnInit ,Input} from '@angular/core';
import { Paquete } from '../../../model/packages';

@Component({
  selector: 'app-tarjeta-paquete',
  templateUrl: './tarjeta-paquete.component.html',
  styleUrls: ['./tarjeta-paquete.component.css']
})
export class TarjetaPaqueteComponent implements OnInit {

  @Input() paquete:Paquete;
  @Input() index:number;
  constructor() { }

  ngOnInit() {
  }

}
