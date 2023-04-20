import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = "http://localhost:8080/api/v1/visitor";

  constructor(private httpClient: HttpClient) { }

  login(email:string) {
    return this.httpClient.get(`${this.baseUrl}/get/${email}`);
  }

  register(user: any) {
    return this.httpClient.post(`${this.baseUrl}/register`, user);
  }

}
