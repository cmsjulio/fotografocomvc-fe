import { Photographer } from './../models/photographer.model';
import { Image } from './../models/image.model';
import { ImageService } from './../service/image.service';
import { ActivatedRoute } from '@angular/router';
import { PhotographerService } from './../service/photographer.service';
import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../auth/_services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentUser: any;
  public photographerId: string;
  public photographer: Photographer;
  public imageList: Image[];
  public showGallery = false;
  public displayStatus: string = 'GALERIA';
  public isProfileOwner: boolean = false;
  public gotPhotographer: boolean = false;

  constructor(
    private photographerService: PhotographerService,
    private imageService: ImageService,
    private tokenStorageService: TokenStorageService,
    private token: TokenStorageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.photographerId = this.route.snapshot.params['idPhotographer'];

    if (
      this.photographerId == this.tokenStorageService.getUser().photographerId
    ) {
      this.isProfileOwner = true;
    }

    this.imageService
      .getGalleryFromPhotographerId(this.photographerId)
      .subscribe((response) => {
        this.imageList = response;
        this.imageList.sort((a, b) => Number(b.id) - Number(a.id));
        this.showGallery = true;
      });

    this.photographerService
      .findById(this.photographerId)
      .subscribe((response) => {
        this.photographer = response;
        this.gotPhotographer = true;
      });
  }
}
