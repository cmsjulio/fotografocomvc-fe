import { environment } from './../../../../environments/environment.prod';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
  public form: FormGroup;

  constructor(public fb: FormBuilder, public http: HttpClient, public router: Router) {}

  ngOnInit() {
      this.form = this.fb.group({
        imageDescription: [''],
        image: [null],
     })
   }

   submitForm() {
    let formData: any = new FormData();
    formData.append('image', this.form.get('image')?.value);
    formData.append('imageDescription', this.form.get('imageDescription')?.value);


     this.http.post(environment.BASE_API_URL + 'photographer/private/gallery', formData)
    .subscribe(
       (response) =>{
        console.log(response)
        window.location.reload();
      },
       (error) =>{console.log(error)}


     )}

    uploadFile(event: any) {
      const file = event.target.files ? event.target.files[0] : null;
      this.form.get('image')?.setValue(file);}
      }
