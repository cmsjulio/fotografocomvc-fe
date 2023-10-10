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
  @Input() image: Image;
  public thumb: any;

  constructor(private imageService: ImageService, private sanitizer: DomSanitizer,     private router: Router
    ) { }

  ngOnInit(): void {
    this.imageService.getImageById(this.image.id).subscribe((response) => {
      this.image = response;
      console.log(response);

      let objectURL = 'data:image/jpeg;base64,' + response.originalImage;
      this.thumb = this.sanitizer.bypassSecurityTrustUrl(objectURL);

    })
  }


}
