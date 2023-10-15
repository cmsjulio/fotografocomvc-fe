import { FormGroup, FormBuilder } from '@angular/forms';
import { Photographer } from './../../../models/photographer.model';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { ImageService } from './../../../service/image.service';
import { Image } from './../../../models/image.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image-gallery-card',
  templateUrl: './image-gallery-card.component.html',
  styleUrls: ['./image-gallery-card.component.css']
})
export class ImageGalleryCardComponent implements OnInit {
  @Input() isProfileOwner: boolean;
  @Input() image: Image;
  @Input() photographer: Photographer;
  public thumb: any;
  public form: FormGroup;

  constructor(public fb: FormBuilder, private imageService: ImageService, private sanitizer: DomSanitizer,     private router: Router
    ) { }
    public isDisabled=true;

  ngOnInit(): void {this.form = this.fb.group({
    imageDescription: [this.image.description]
 })
    this.imageService.getImageById(this.image.id).subscribe((response) => {
      this.image = response;
      console.log(response);

      let objectURL = 'data:image/jpeg;base64,' + response.originalImage;
      this.thumb = this.sanitizer.bypassSecurityTrustUrl(objectURL);

    })
  }

  public editarClick(imageId?: string): void {
    var imageRequest = {
      imageDescription: this.form.controls['imageDescription'].value
   }
   this.imageService.updateGalleryImageDescription(imageRequest, imageId).subscribe((response)=>{
    window.location.reload()
 })
  }

  public voltarClick(): void {
    window.location.reload()
  }

  public deleteClick(imageId?: string): void{
    this.imageService.deleteGalleryImage(imageId).subscribe((response)=>{
      window.location.reload()
   })
  }
}
