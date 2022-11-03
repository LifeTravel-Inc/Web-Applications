import { Flight } from './../models/flight';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  basePathFlight: string = environment.basePathFlight;

  constructor(private http: HttpClient) { }

  getFlights() {
    return this.http.get<Flight[]>(this.basePathFlight);
  }
}
