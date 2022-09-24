import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Agency } from '../models/agency';

@Injectable({
  providedIn: 'root'
})
export class AgencyService {
  basePathAgency: string = environment.basePathAgency;
  constructor(private http: HttpClient) {
    
  }
  addAgency(agency: Agency) {
    return this.http.post<Agency>(
      this.basePathAgency,
      agency);
  }
}
