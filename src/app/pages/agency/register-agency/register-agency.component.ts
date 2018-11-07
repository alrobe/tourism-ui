import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AgencyService } from '../../../services/agency.service';
import {Agency} from '../../../model/agency';
import { Person } from '../../../model/person';

@Component({
  selector: 'app-register-agency',
  templateUrl: './register-agency.component.html'
})
export class RegisterAgencyComponent implements OnInit {
  
  agencyToSave: Agency;
  agencyForm: FormGroup;
  constructor(private fb: FormBuilder, 
    private agencyService: AgencyService) { 
      this.agencyToSave = new Agency();
      this.agencyToSave.person = new Person();
    }

  ngOnInit() {
    this.agencyForm = this.fb.group({
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

  saveAgency(){
    this.createAgencyModel();
    this.agencyService.createAgency(this.agencyToSave)
    .then(data => {
      this.agencyForm.reset();
    });
  }

  createAgencyModel(){
    this.agencyToSave.name = this.agencyForm.get('agencyName').value;
    this.agencyToSave.phone = this.agencyForm.get('agencyPhone').value;
    this.agencyToSave.email = this.agencyForm.get('agencyEmail').value;
    this.agencyToSave.webPage = this.agencyForm.get('agencyWebPage').value;
    this.agencyToSave.person.name = this.agencyForm.get('representativeName').value;
    this.agencyToSave.person.lastName = this.agencyForm.get('representativeLastName').value;
    this.agencyToSave.person.email = this.agencyForm.get('representativeEmail').value;
    this.agencyToSave.person.phone = this.agencyForm.get('representativePhone').value;
  }
}
