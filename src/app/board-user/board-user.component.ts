import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../auth/_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css'],
})
export class BoardUserComponent {
  @Input() header?: string;
  content?: string;
  public showModal: boolean = false;

  public switchModal(): void {
    this.showModal = !this.showModal;
  }

  public closeModal(): void {}
}
