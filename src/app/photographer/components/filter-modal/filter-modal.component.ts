import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.css']
})
export class FilterModalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  public submitFilterRequest(): void {
      // this.router.navigate(['/photographers-by-location/' + this.selectedLocation.id]);

    window.location.reload();
  }

}
