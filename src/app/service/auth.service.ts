import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // User login and register :

  isLoggedIn = false;
  baseUrl = "http://localhost:8080/api/v1/auth";

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  login(email: string, password: string) {
    const user = { email, password };
    this.isLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');

    return this.httpClient.post(`${this.baseUrl}/authenticate`, user);
  }


  register(user: any): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}/register`, user)
      .pipe(
        catchError(error => {
          console.log(error);
          alert('Database is not connected');
          this.router.navigate(['/page-not-found'])
          return of(null);
        })
      )
  }

  logout() {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
  }

  isAuthenticated() {
    return localStorage.getItem('isLoggedIn') == 'true';
  }

  // Employee management :

  empUrl = "http://localhost:8080/api/v1/employee"
  addEmployee(user: any): Observable<any> {
    console.log(user);

    return this.httpClient.post(`${this.empUrl}/save`, user);
  }

  getToken() {
    return localStorage.getItem('token') || '';
  }
}
