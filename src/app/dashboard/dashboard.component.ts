import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  productCategoryArray: any[] = [];
  AllProductsArray: any[] = [];
  VisibleArray: any[] = [];
  visibleNextArray: any[] = [];
  visibleNextArray1: any[] = [];

  category:string=''

  rating: number = 3; // Default rating

  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.ShowAllCategoryLIst();
    this.ShowLimitedProducts();
  }

  ShowAllCategoryLIst() {
    this.userService.getAllCategory().subscribe(
      (data) => {
        this.productCategoryArray = data.slice(0, 11);
      },
      (error) => {
        console.error('Error fetching product category list:', error);
      }
    );
  }

  ShowLimitedProducts() {
    this.userService.getAllProducts().subscribe(
      (data) => {
        this.AllProductsArray = data.products;
        this.VisibleArray = data.products.slice(0, 7);
        this.visibleNextArray = data.products.slice(7, 14);
        this.visibleNextArray1 = data.products.slice(16, 32);
      },
      (error) => {
        console.error('Error fetching product  list:', error);
      }
    );
  }

  showAllProducts() {
    this.VisibleArray = this.AllProductsArray;
    this.visibleNextArray = this.AllProductsArray;
  }

  viewProductDetail(productId: number) {
    this.router.navigate(['/home/product-detail', productId]); // Navigate to product detail page with ID
  }


  goToCategoryProducts(category:string){
    this.router.navigate(['/home/activeCategoryList',category])
  }
  onRateChange(event: any): void {
    console.log('New rating:', event.newValue);
    this.rating = event.newValue || 0;
  }

  addToCart(productId: string, quantity: number): void {
    console.log('Product added to cart:', productId);
    alert('product added to cart');
    this.userService.addtoCart(productId, quantity).subscribe(
      (data) => {
        alert('success');
      },
      (error) => {}
    );
    // You can now push the product to a cart array or service
  }
}
