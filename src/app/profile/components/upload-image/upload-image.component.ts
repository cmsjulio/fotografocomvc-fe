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

  constructor(public fb: FormBuilder, public http: HttpClient) {}

  ngOnInit() {
      this.form = this.fb.group({
        imageDescription: [''],
        image: [null],
     })
   }

   public upLoadImage(): void {
    console.log("upload")
   }

   submitForm() {
    let formData: any = new FormData();
    formData.append('image', this.form.get('image')?.value);
    formData.append('imageDescription', this.form.get('imageDescription')?.value);


     this.http.post('http://localhost:8080/fotografocomvc-api/photographer/private/gallery', formData)
    .subscribe(
       (response) =>console.log(response),
       (error) =>console.log(error)
     )}

    uploadFile(event: any) {
      const file = event.target.files ? event.target.files[0] : null;
      this.form.get('image')?.setValue(file);}

      }
