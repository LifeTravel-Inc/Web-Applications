import { Destiny } from 'src/app/models/destiny';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DestinyService {
  basePathDestiny: string = environment.basePathDestiny;

  constructor(private http: HttpClient) { }

  getDestinys(){
    return this.http.get<Destiny[]>(this.basePathDestiny);
  }
}
