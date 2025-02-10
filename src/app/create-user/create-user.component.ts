import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../userService';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css',
})
export class CreateUserComponent {
  errorMessage: string = '';
  successMessage: string = '';
  SignUpForm: FormGroup; // FormGroup instance for the login form
  user: any; // To store user details after login

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    // Initialize the FormGroup with controls and validation rules
    this.SignUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],



      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  createUser(): void {
    if (this.SignUpForm.invalid) {
      // If the form is invalid, display an error message
      this.errorMessage = 'Please fill in all fields correctly.';
      this.SignUpForm.markAllAsTouched(); // Highlight invalid fields
      return;
    }

    const { firstName, lastName,username,password,age } = this.SignUpForm.value;

    this.userService.createUser(firstName, lastName, username,password,age).subscribe(
      (data) => {
        this.successMessage = 'User account created successfully!';
        this.resetForm();
      },
      (error) => {
        this.errorMessage = 'Please fill all fields correctly.';
      }
    );
  }
  //ertyuopp  
  resetForm(): void {
    {
      this.SignUpForm.reset({
        firstName:'',
        lastName:'',

        username: '',
        password: '',
      });
    }
    this.successMessage = '';
  }
}
