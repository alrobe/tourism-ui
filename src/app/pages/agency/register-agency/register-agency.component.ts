import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgencyService } from '../../../services/agency.service';

@Component({
  selector: 'app-register-agency',
  templateUrl: './register-agency.component.html'
})
export class RegisterAgencyComponent implements OnInit {
  
  agency: FormGroup;
  constructor(private fb: FormBuilder, private agencyService: AgencyService) { }

  ngOnInit() {
    this.agency = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', Validators.required],
      email: ['', [Validators.required]],
      webPage: ['', [Validators.required]]
    });
  }
}
