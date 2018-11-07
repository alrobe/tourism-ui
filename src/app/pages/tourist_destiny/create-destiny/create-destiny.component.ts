import { Component, OnInit } from '@angular/core';
import { TouristDestiny } from '../../../model/tourist_destiny'

@Component({
  selector: 'app-create-destiny',
  templateUrl: './create-destiny.component.html',
  styleUrls: ['./create-destiny.component.css']
})
export class CreateDestinyComponent implements OnInit {

  tourist_destiny : TouristDestiny;

  constructor() { }

  save_tourist_destiny(): void{
    console.log("you are sending to save." + this.tourist_destiny);
  }

  ngOnInit() {
  }

}


