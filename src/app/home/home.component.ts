import { Component, OnInit } from '@angular/core';
import { retry } from 'rxjs';
import { UserService } from '../userService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  searchitem = '';
  filteredArray: any[] = [];

  myArray: any[] = [];
  ngOnInit(): void {
    this.ShowAllProduct();
  }

  ShowAllProduct() {
    this.userService.getAllProducts().subscribe(
      (data) => {
        this.myArray = data.products;
        this.filteredArray=data.products;
      },
      (error) => {}
    );
  }

  OnClick() {

    this.router.navigate(['/home/search/',this.searchitem])

  }
}
