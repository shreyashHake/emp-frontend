import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  baseUrl = "http://localhost:8080/api/v1/visitor";

  constructor(private httpClient: HttpClient) { }

  login(email:string) {
    this.isLoggedIn = true;
    return this.httpClient.get(`${this.baseUrl}/get/${email}`);
  }

  register(user: any) {
    return this.httpClient.post(`${this.baseUrl}/register`, user);
  }

  logout() {
    this.isLoggedIn = false;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
