import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = environment.BASE_API_URL + 'auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  registerPhotographer(
    username: string,
    name: string,
    password: string
  ): Observable<any> {
    return this.http.post(
      AUTH_API + 'register-photographer',
      {
        username,
        name,
        password,
      },
      httpOptions
    );
  }

  registerCustomer(
    username: string,
    name: string,
    password: string
  ): Observable<any> {
    return this.http.post(
      AUTH_API + 'register-customer',
      {
        username,
        name,
        password,
      },
      httpOptions
    );
  }
}
