import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TouristDestinyService } from 'src/app/services/touristDestiny.service';

@Component({
  selector: 'app-destiny-info',
  templateUrl: './destiny-info.component.html',
  styleUrls: ['./destiny-info.component.css']
})
export class DestinyInfoComponent implements OnInit {

  destinyId: any;
  destiny: any;
  constructor(private route: ActivatedRoute, private destiniesService: TouristDestinyService) {
  }
  
  ngOnInit() {
    this.destinyId = this.route.snapshot.paramMap.get('destinyId');
    this.destiniesService.getDestinyById(this.destinyId).subscribe(response => {
      this.destiny = response;
    });
  }
}
