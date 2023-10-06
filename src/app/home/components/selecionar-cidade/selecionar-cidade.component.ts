import { Router } from '@angular/router';
import { Location } from './../../../models/location.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecionar-cidade',
  templateUrl: './selecionar-cidade.component.html',
  styleUrls: ['./selecionar-cidade.component.css'],
})
export class SelecionarCidadeComponent implements OnInit {
  public locationList: Location[] = [
    { id: 1, locationCity: 'rio de janeiro', locationState: 'RJ' },
    { id: 2, locationCity: 'sao paulo', locationState: 'SP' },
    { id: 3, locationCity: 'niterói', locationState: 'RJ' },
    { id: 4, locationCity: 'santos', locationState: 'SP' },
  ];
  public selectedState: string = '-';
  public selectedCity: string = '-';
  public selectedLocation: Location;
  public isCitySelected: boolean = false;
  public locationStateList: string[];
  public locationCityList: Location[];
  public isLocationSelected: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {
    let states = this.locationList.map((location) => {
      return location.locationState;
    });
    this.locationStateList = [...new Set(states)];
    console.log(this.locationStateList);
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
      this.router.navigate(['/photographer/' + this.selectedLocation.id]);
    }
  }
}
