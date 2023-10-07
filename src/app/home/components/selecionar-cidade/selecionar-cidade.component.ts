import { LocationService } from './../../../service/location.service';
import { Router } from '@angular/router';
import { Location } from './../../../models/location.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecionar-cidade',
  templateUrl: './selecionar-cidade.component.html',
  styleUrls: ['./selecionar-cidade.component.css'],
})
export class SelecionarCidadeComponent implements OnInit {

  public locationList: Location[];

  public selectedState: string = '-';
  public selectedCity: string = '-';
  public selectedLocation: Location;
  public isCitySelected: boolean = false;
  public locationStateList: string[];
  public locationCityList: Location[];
  public isLocationSelected: boolean;

  constructor(private router: Router, private locationService: LocationService) {}

  ngOnInit(): void {
        this.locationService.findAllLocation().subscribe((response) => {
          this.locationList = response;
          console.log(response);

          let states = this.locationList.map((location) => {
            return location.locationState;
          });
          this.locationStateList = [...new Set(states)];
          console.log(this.locationStateList);
        })


  }

  public itemStateClick(location: string): void {
    this.selectedState = location;
    this.locationCityList = this.locationList.filter((location) => {
      return location.locationState === this.selectedState;
    });
    this.selectedCity = '-';
    this.isLocationSelected = false;
    console.log(this.selectedState);
  }

  public itemCityClick(location: Location): void {
    this.selectedCity = location.locationCity;
    this.selectedLocation = location;
    this.isLocationSelected = true;
    console.log(this.selectedLocation);
  }

  public submitLocationRequest(): void {
    if (this.isLocationSelected) {
      this.router.navigate(['/photographers-by-location/' + this.selectedLocation.id]);
    }
  }
}
