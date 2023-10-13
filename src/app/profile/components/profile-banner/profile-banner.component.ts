import { DomSanitizer } from '@angular/platform-browser';
import { Image } from './../../../models/image.model';
import { ImageService } from './../../../service/image.service';
import { Photographer } from './../../../models/photographer.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-banner',
  templateUrl: './profile-banner.component.html',
  styleUrls: ['./profile-banner.component.css'],
})
export class ProfileBannerComponent implements OnInit {
  @Input() photographer: Photographer;
  @Input() isProfileOwner: boolean;
  public profilePic: Image;
  public thumb: any;
  public hasPicture: boolean = false;

  constructor(
    private imageService: ImageService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.imageService
      .getImageById(this.photographer.profilePicImageId)
      .subscribe((response) => {
        this.profilePic = response;
        console.log(this.profilePic);

        let objectURL = 'data:image/jpeg;base64,' + response.originalImage;
        this.thumb = this.sanitizer.bypassSecurityTrustUrl(objectURL);

        if (response.originalImage != null) {
          this.hasPicture = true;
        }
      });
  }
}
