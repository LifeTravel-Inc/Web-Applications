import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent implements OnInit {
  myForm!: FormGroup;
  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {
    this.reactiveForm();
    
   }

  ngOnInit(): void {
  }
  reactiveForm(){
    this.myForm = this.fb.group({  
      id:[''],
      name: ['', [Validators.required, Validators.maxLength(10)]],
      lastname:['',[Validators.required,Validators.maxLength(10)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      
    });
  }
  saveUser(): void{
    const user: User = {
      id: 0,
      name: this.myForm.get('name')!.value,
      lastname: this.myForm.get('lastname')!.value,
      phone: this.myForm.get('phone')!.value,
      email: this.myForm.get('email')!.value,
      password: this.myForm.get('password')!.value
    };

    this.userService.addUser(user).subscribe();
  }
}
