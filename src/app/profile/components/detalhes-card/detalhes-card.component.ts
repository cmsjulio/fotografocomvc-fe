import { Photographer } from './../../../models/photographer.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhes-card',
  templateUrl: './detalhes-card.component.html',
  styleUrls: ['./detalhes-card.component.css'],
})
export class DetalhesCardComponent implements OnInit {
  constructor() {}
  @Input() photographer: Photographer;

  ngOnInit(): void {}
}
