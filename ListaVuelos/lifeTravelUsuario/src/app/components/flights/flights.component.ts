import { Flight } from './../../models/flight';
import { FlightService } from './../../services/flight.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flights !: Flight[];

  constructor(
    private flightService: FlightService,
  ) { }

  ngOnInit(): void {
    this.getFlighst();
  }

  getFlighst(){
    this.flightService.getFlights()
      .subscribe((data: Flight[]) =>{
        this.flights = data;
      })
  }
}
