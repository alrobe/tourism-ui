import { Component, OnInit } from '@angular/core';
import { TouristDestiny } from 'src/app/model/tourist_destiny';
import { TouristDestinyService } from 'src/app/services/touristDestiny.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-destinies',
  templateUrl: './destinies.component.html',
  styleUrls: ['./destinies.component.css']
})
export class DestiniesComponent implements OnInit {

  destinies: any;
  constructor(private destiniesService: TouristDestinyService, private router: Router, ) {
    this.destiniesService.getAllDestinies().subscribe(response => {
      this.destinies = response;
    })
  }

  ngOnInit() {
  }

  redirectPage(destinyId) {
    this.router.navigate(['destinies', destinyId]);
  }

  deleteDestiny(destinyId) {
    let response = confirm("Desea eliminar este destino?");
    if (response) {
      this.destiniesService.deleteDestiny(destinyId).subscribe(response => {
      });
      location.reload();
    }
  }
}
