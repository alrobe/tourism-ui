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

  get a() { return this.agency.controls; }

  ngOnInit() {
    this.agency = this.fb.group({
      agencyName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(40)]],
      agencyPhone: ['', Validators.required],
      agencyEmail: ['', [Validators.required, Validators.email]],
      agencyWebPage: ['', Validators.required],
      representativeName: ['', Validators.required],
      representativeLastName: ['', Validators.required],
      representativeEmail: ['', [Validators.required, Validators.email]],
      representativePhone: ['', Validators.required]
    });
  }
}
