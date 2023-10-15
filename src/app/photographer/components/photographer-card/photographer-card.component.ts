import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Image } from './../../../models/image.model';
import { ImageService } from './../../../service/image.service';
import { Photographer } from './../../../models/photographer.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-photographer-card',
  templateUrl: './photographer-card.component.html',
  styleUrls: ['./photographer-card.component.css']
})
export class PhotographerCardComponent implements OnInit {

  @Input() photographer: Photographer;
  public image: Image;
  public thumb: any;

  constructor(private imageService: ImageService, private sanitizer: DomSanitizer,     private router: Router
    ) { }

  ngOnInit(): void {
    this.imageService.getImageById(this.photographer.profilePicImageId).subscribe((response) => {
      this.image = response;
      // console.log(response);

      let objectURL = 'data:image/jpeg;base64,' + response.originalImage;
      this.thumb = this.sanitizer.bypassSecurityTrustUrl(objectURL);

    })
  }

  public goToProfile(id?: string): void{
    this.router.navigate(['/profile/' + id]);

  }

}
