import { Photographer } from './../../../models/photographer.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mais-sobre-mim-form',
  templateUrl: './mais-sobre-mim-form.component.html',
  styleUrls: ['./mais-sobre-mim-form.component.css']
})
export class MaisSobreMimFormComponent implements OnInit {

  @Input() photographer: Photographer;

  constructor() { }

  ngOnInit(): void {
  }

}
