import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Location } from '../models/location.model';


const API_URL = environment.BASE_API_URL + 'location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  constructor(private http: HttpClient) { }

  findAllLocation(): Observable<Location[]> {
    return this.http.get<Location[]>(API_URL);
  }

  // findById(certameId: string): Observable<Certame> {
  //   return this.http.get<Certame>(`${this.baseUrl}/${certameId}`);
  // }

}
