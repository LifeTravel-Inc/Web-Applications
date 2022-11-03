import { Router } from '@angular/router';
import { Destiny } from './../../models/destiny';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places-client',
  templateUrl: './places-client.component.html',
  styleUrls: ['./places-client.component.css']
})
export class PlacesClientComponent implements OnInit {
  myForm !: FormGroup;
  nameofdestiny !: String;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.reactiveForm(); 
  }

  ngOnInit(): void {

  }

  reactiveForm(){
    this.myForm = this.fb.group({
      name_destiny: [''],
    })
  }

  sendDestiny(){
    const destiny: Destiny ={
      id: 0,
      name: this.myForm.get('name_destiny')!.value,
      description: ""
    };
    
    this.router.navigate(['user/travel/:name_destiny', {name_destiny: destiny.name }]);
  }
}
