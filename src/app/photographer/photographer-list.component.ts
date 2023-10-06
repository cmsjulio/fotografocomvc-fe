import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-photographer-list',
  templateUrl: './photographer-list.component.html',
  styleUrls: ['./photographer-list.component.css'],
})
export class PhotographerListComponent implements OnInit {
  public locationId: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.locationId = this.route.snapshot.params['idLocation'];
    console.log(this.locationId);
  }
}
