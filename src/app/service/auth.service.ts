import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  baseUrl = "http://localhost:8080/api/v1/auth";

  constructor(private httpClient: HttpClient,
    private router: Router) { }

  login(email:string, password:string) {
    const user = {email, password};
    this.isLoggedIn = true;
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
    this.isLoggedIn = false;
  }

  isAuthenticated() {
    return this.isLoggedIn;
  }
}
