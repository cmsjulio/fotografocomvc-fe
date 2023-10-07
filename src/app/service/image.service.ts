import { Image } from './../models/image.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';


const API_URL = environment.BASE_API_URL + 'photographer/public/getImageDetails/';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) { }

  getImageById(id?: string): Observable<Image> {
    return this.http.get<Image>(API_URL + id);
  }

  // findById(certameId: string): Observable<Certame> {
  //   return this.http.get<Certame>(`${this.baseUrl}/${certameId}`);
  // }

}
