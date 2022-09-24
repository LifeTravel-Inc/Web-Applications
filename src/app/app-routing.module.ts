import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AgencyDestinoComponent } from './components/agency-destino/agency-destino.component';
import { HomeAgencyComponent } from './components/home-agency/home-agency.component';
import { LoginAgencyComponent } from './components/login-agency/login-agency.component';
import { LoginRegistrationAgencyComponent } from './components/login-registration-agency/login-registration-agency.component';
import { LoginRegistrationComponent } from './components/login-registration/login-registration.component';
import { LoginUserComponent } from './components/login-user/login-user.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login/agency', component: LoginAgencyComponent },
  { path: 'login/user', component: LoginUserComponent },
  { path: 'register', component: LoginRegistrationComponent },
  { path: 'register/agency', component: LoginRegistrationAgencyComponent },
  { path: 'home/agency', component: HomeAgencyComponent },
  { path: 'agency/desti', component: AgencyDestinoComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
