import { Photographer } from './../../../models/photographer.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equipamento-form',
  templateUrl: './equipamento-form.component.html',
  styleUrls: ['./equipamento-form.component.css']
})
export class EquipamentoFormComponent implements OnInit {
  @Input() photographer: Photographer;

  constructor() { }

  ngOnInit(): void {
  }

}
