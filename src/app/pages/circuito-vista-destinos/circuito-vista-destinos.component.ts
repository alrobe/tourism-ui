import { Component, OnInit } from '@angular/core';
import { CircuitoService } from 'src/app/services/circuito.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-circuito-vista-destinos',
  templateUrl: './circuito-vista-destinos.component.html',
  styleUrls: ['./circuito-vista-destinos.component.css']
})
export class CircuitoVistaDestinosComponent implements OnInit {

  circuito$: Object;
  destino$: string = "";
  constructor(private data: CircuitoService, private route: ActivatedRoute) { 
    this.route.params.subscribe( params => this.circuito$ = params.id)
  }

  ngOnInit() {
    this.circuito$ = this.data.getCircuito(this.circuito$);
  }

  show(destino)
  {
    this.destino$ = JSON.stringify(destino);;
  }

}
