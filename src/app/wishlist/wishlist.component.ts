import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css',
})
export class WishlistComponent implements OnInit {
  ShowAllProduct1: any;
  constructor(private userservice: UserService, private router: Router) {}
  newArray: any[] = [];
  ShowAllProduct: any[] = [];

  ngOnInit(): void {
    this.addCartByuser('142');
    this.showAllProducts();
    // this.SeeAll();
  }

  addCartByuser(productID: string) {
    this.userservice.getCartByUser(productID).subscribe(
      (data) => {
        // this.newArray=data.products

        this.newArray = data?.carts?.[0]?.products || [];

        // this.cart = data;
        console.log(this.newArray);
      },
      (error) => {}
    );
  }
  showAllProducts() {
    this.userservice.getAllProducts().subscribe(
      (data) => {
        this.ShowAllProduct1=data.products;
        this.ShowAllProduct = data.products.slice(0, 5);
      },
      (error) => {}
    );
  }
  SeeAll() {
    
        // this.ShowAllProduct1 = data.products;
        this.ShowAllProduct=this.ShowAllProduct1;
  
  }

  addToCart(productId: string, quantity: number): void {
    console.log('Product added to cart:', productId);
    alert('product added to cart');
    this.userservice.addtoCart(productId, quantity).subscribe(
      (data) => {
        alert('success');
      },
      (error) => {}
    );
    // You can now push the product to a cart array or service
  }

  viewProductDetail(id:string){
    this.router.navigate(['/home/product-detail', id]); // Navigate to product detail page with ID

  }
}
