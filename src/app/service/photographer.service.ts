import { Photographer } from './../models/photographer.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

const API_URL = environment.BASE_API_URL + 'photographer';

@Injectable({
  providedIn: 'root',
})
export class PhotographerService {
  constructor(private http: HttpClient) {}

  findAllPhotographerByLocationId(
    locationId: string
  ): Observable<Photographer[]> {
    return this.http.get<Photographer[]>(
      `${API_URL}/public/findAllByLocationId/${locationId}`
    );
  }

  findById(photographerId: string): Observable<Photographer> {
    return this.http.get<Photographer>(`${API_URL}/public/${photographerId}`);
  }
}
