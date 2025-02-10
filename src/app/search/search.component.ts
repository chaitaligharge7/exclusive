import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  productName: string = '';
  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productName = params['title']; // Get the title parameter from the route
      if (this.productName) {
        this.serachProduct(this.productName);
      } else {
        this.getAll();
      }
    });
  }

  product: any[] = [];

  serachProduct(productName: string) {
    this.userService.searchProduct(productName).subscribe(
      (data) => {
        this.product = data.products.slice(0, 20);
      },
      (error) => {}
    );
  }

  getAll() {
    this.userService.getAllProducts().subscribe(
      (data) => {
        this.product = data.products;
      },
      (error) => {}
    );
  }

  goToDetail(id: string) {
    this.router.navigate(['/home/product-detail', id]); // Navigate to product detail page with ID
  }
}
