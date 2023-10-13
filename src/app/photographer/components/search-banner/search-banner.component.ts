import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/models/location.model';
import { LocationService } from 'src/app/service/location.service';

@Component({
  selector: 'app-search-banner',
  templateUrl: './search-banner.component.html',
  styleUrls: ['./search-banner.component.css']
})
export class SearchBannerComponent implements OnInit {
  public location: Location;

  constructor(private locationService: LocationService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    let locationId = this.route.snapshot.params['idLocation'];
    this.locationService.getLocationById(locationId).subscribe((location)=>{
      this.location = location;
    })

  }

}
