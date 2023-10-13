import { Photographer } from './../../../models/photographer.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dados-basicos-form',
  templateUrl: './dados-basicos-form.component.html',
  styleUrls: ['./dados-basicos-form.component.css']
})
export class DadosBasicosFormComponent implements OnInit {
  @Input() photographer: Photographer;

  constructor() { }

  ngOnInit(): void {
  }

}
