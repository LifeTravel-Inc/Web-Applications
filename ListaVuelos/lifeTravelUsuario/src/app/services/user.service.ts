import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  basePathUser: string = environment.basePathUser;
  constructor(private http: HttpClient) { }
  addUser(user: User) {
    return this.http.post<User>(
      this.basePathUser,
      user);
  }
}
