import { Component, OnInit } from '@angular/core';
import { UserService } from '../auth/_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUserBoard().subscribe({
      next: data => {
        this.content = data;
      },
      error: err => {
        this.content = JSON.parse(err.error).message;
      }
    });
    // Get modal
  var modal = document.getElementById("myModal");
  if (modal != null) {
    modal.style.background = "rgba(0, 0, 0, 0.8)"
  }

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  if (btn != null) {
    // btn.style.backgroundColor = 'bl';
    // btn.style.color = 'white';
    // btn.style.fontSize = '2em';
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  btn!.onclick = function () {
    modal!.style.display = "block";
  }
  // When the user clicks on <span> (x), close the modal
  // span!.onclick = function() {
  //   modal.style.display = "none";
  // }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal!.style.display = "none";
    }
  }
  }
  // Get the modal

}
