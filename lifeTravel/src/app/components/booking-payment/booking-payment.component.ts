import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService} from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking-payment',
  templateUrl: './booking-payment.component.html',
  styleUrls: ['./booking-payment.component.css'],
})
export class BookingPaymentComponent implements OnInit {
  myForm!: FormGroup;
  longText = "";

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.reactiveForm();
  }

  ngOnInit(): void {}

  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(10)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  saveUser(): void {
    const user: User = {
      id: 0,
      name: this.myForm.get('name')!.value,
      lastname: this.myForm.get('lastname')!.value,
      phone: this.myForm.get('phone')!.value,
      email: this.myForm.get('email')!.value,
      password: this.myForm.get('password')!.value,
    };
    this.userService.bookingPayment(user).subscribe({
      next: (data) => {
        this.snackBar.open('El pago fue registrado con exito!', '', {
          duration: 3000,
        });
        this.router.navigate(['/list']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
