import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../userService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup; // FormGroup instance for the login form

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    // Initialize the FormGroup with controls and validation rules
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  errorMessage: string = '';
  successMessage: string = '';

  user: any; // To store user details after login

  // Method to handle form submission
  login(): void {
    if (this.loginForm.invalid) {
      // If the form is invalid, display an error message
      this.errorMessage = 'Please fill in all fields correctly.';
      this.loginForm.markAllAsTouched(); // Highlight invalid fields
      return;
    }

    const { username, password } = this.loginForm.value;

    // Call the service to validate login credentials
    this.userService.login(username, password).subscribe((user) => {
      if (user) {
        this.user = user; // Successful login

        this.successMessage = 'login successfull';
        this.loginForm.reset();
        this.router.navigate(['/home/dashboard']);
        // this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = 'Invalid username or password.';
      }
    });
  }
}
