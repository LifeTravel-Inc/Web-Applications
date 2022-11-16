import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { LoginAgencyComponent } from './components/login-agency/login-agency.component';
import { LoginRegistrationComponent } from './components/login-registration/login-registration.component';
import { LoginRegistrationAgencyComponent } from './components/login-registration-agency/login-registration-agency.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { HomeAgencyComponent } from './components/home-agency/home-agency.component';
import { AgencyDestinoComponent } from './components/agency-destino/agency-destino.component';
import { AngularMaterialModule } from './components/shared/angula-material/angula-material.module';
import { DestinoDialogComponent } from './components/destino-dialog/destino-dialog.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingPaymentComponent } from './components/booking-payment/booking-payment.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginAgencyComponent,
    LoginRegistrationComponent,
    LoginRegistrationAgencyComponent,
    LoginUserComponent,
    HomeAgencyComponent,
    AgencyDestinoComponent,
    DestinoDialogComponent,
    BookingPaymentComponent,
    NavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, AngularMaterialModule, 
    HttpClientModule,ReactiveFormsModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
