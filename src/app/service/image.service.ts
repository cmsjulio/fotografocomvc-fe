import { Image } from './../models/image.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';


const API_URL = environment.BASE_API_URL + 'photographer/public/getImageDetails/';
const GALLERY_URL = environment.BASE_API_URL + 'photographer/public/gallery/'
const UPDATE_URL = environment.BASE_API_URL + 'photographer/private/updateImageDescription/'
const DELETE_URL = environment.BASE_API_URL + 'photographer/private/deleteOwnImageFromGallery/'

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  constructor(private http: HttpClient) { }

  getImageById(id?: string): Observable<Image> {
    return this.http.get<Image>(API_URL + id);
  }

  getGalleryFromPhotographerId(photographerId?: string): Observable<Image[]> {
    return this.http.get<Image[]>(GALLERY_URL + photographerId);
  }

  updateGalleryImageDescription(imageDescriptionRequest?: any, imageId?: string): Observable<any> {
    return this.http.put<any>(UPDATE_URL + imageId, imageDescriptionRequest)
  }

  deleteGalleryImage(imageId?: string): Observable<any> {
    return this.http.delete(DELETE_URL + imageId)

  }

  // findById(certameId: string): Observable<Certame> {
  //   return this.http.get<Certame>(`${this.baseUrl}/${certameId}`);
  // }

}
