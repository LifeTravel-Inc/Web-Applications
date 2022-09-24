import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Agency } from 'src/app/models/agency';
import { AgencyService } from 'src/app/services/agency.service';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-login-registration-agency',
  templateUrl: './login-registration-agency.component.html',
  styleUrls: ['./login-registration-agency.component.css']
})
export class LoginRegistrationAgencyComponent implements OnInit {
  myForm!: FormGroup;
  constructor(private agencyService: AgencyService, private router: Router, private fb: FormBuilder) { 
    this.reactiveForm();
  }

  ngOnInit(): void {
  }
  reactiveForm(){
    this.myForm = this.fb.group({  
      id:[''],
      name: ['', [Validators.required, Validators.maxLength(10)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }
saveAgency(): void{
    const agency: Agency = {
      id: 0,
      name: this.myForm.get('name')!.value,
      phone: this.myForm.get('phone')!.value,
      email: this.myForm.get('email')!.value,
      password: this.myForm.get('password')!.value
    };

    this.agencyService.addAgency(agency).subscribe();
  }



}
