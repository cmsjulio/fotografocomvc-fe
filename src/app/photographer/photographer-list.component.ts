import { Photographer } from './../models/photographer.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotographerService } from '../service/photographer.service';
@Component({
  selector: 'app-photographer-list',
  templateUrl: './photographer-list.component.html',
  styleUrls: ['./photographer-list.component.css'],
})
export class PhotographerListComponent implements OnInit {
  public locationId: string;
  public photographerList: Photographer[];
  public nullPhotographer: Photographer ={};

  constructor(private route: ActivatedRoute,
    private photographerService: PhotographerService ) {}
    public showProfiles =false;

  ngOnInit(): void {
    this.locationId = this.route.snapshot.params['idLocation'];
    this.photographerService.findAllPhotographerByLocationId(this.locationId).subscribe((response) => {
      this.photographerList = response;
      this.showProfiles = true;
      console.log(response);
    })
  }

}
