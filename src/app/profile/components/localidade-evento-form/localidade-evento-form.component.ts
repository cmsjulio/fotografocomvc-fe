import { Photographer } from './../../../models/photographer.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-localidade-evento-form',
  templateUrl: './localidade-evento-form.component.html',
  styleUrls: ['./localidade-evento-form.component.css']
})
export class LocalidadeEventoFormComponent implements OnInit {

  @Input() photographer: Photographer;

  constructor() { }

  ngOnInit(): void {
  }

}
