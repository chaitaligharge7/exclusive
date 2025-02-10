import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../userService';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css',
})
export class ForgotPasswordComponent {
  forgotpassForm: FormGroup;

  username: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {
    // Initialize form with validation
    this.forgotpassForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  onSubmit() {
    //check form is invalid--1step
    if (this.forgotpassForm.invalid) {
      this.forgotpassForm.markAllAsTouched();
      alert('Please fill out the form correctly.');
      return;
    }

    const { id, password, confirmPassword } = this.forgotpassForm.value;

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.userService.forgotPassword(id, password, confirmPassword).subscribe(
      (data) => {
        console.log('Password updated successfully:', data);
        alert('Password updated successfully!');
        this.router.navigate(['/home/login']);
      },
      (error) => {}
    );
  }
}
