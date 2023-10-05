import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: null,
    email: null,
    password: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  public accountType: string = 'PHOTOGRAPHER';

  onSubmit(): void {
    const { username, email, password } = this.form;

    if (this.accountType === 'te') {
      // order matters in this call, as it's not yet typed
      this.authService
        .registerPhotographer(email, username, password)
        .subscribe({
          next: (data) => {
            console.log(data);
            this.isSuccessful = true;
            this.isSignUpFailed = false;
            // this.reloadPage();
          },
          error: (err) => {
            this.errorMessage = err.error.message;
            this.isSignUpFailed = true;
          },
        });
    }

    if (this.accountType === 'CUSTOMER') {
      // order matters in this call, as it's not yet typed
      this.authService.registerCustomer(email, username, password).subscribe({
        next: (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
          // this.reloadPage();
        },
        error: (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        },
      });
    }
  }

  reloadPage(): void {
    window.location.reload();
    this.router.navigate(['/home']);
  }

  public setToPhotographer(): void {
    this.accountType = 'PHOTOGRAPHER';
  }
  public setToCliente(): void {
    this.accountType = 'CUSTOMER';
  }
}
