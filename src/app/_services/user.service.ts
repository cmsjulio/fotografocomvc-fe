import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.BASE_API_URL;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'photographer', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return new Observable<void>();
  }

  getModeratorBoard(): Observable<any> {
    return new Observable<void>();
  }

  getAdminBoard(): Observable<any> {
    return new Observable<void>();
  }
}
