import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrl: './add-cart.component.css',
})
export class AddCartComponent implements OnInit {
  newArray: any[] = [];
  cart: any = null;

  constructor(private userService: UserService, private router: Router) {}
  ngOnInit(): void {
    this.getCartByUser('142');
  }

  getCartByUser(productID: string) {
    this.userService.getCartByUser(productID).subscribe(
      (data) => {
        // this.newArray = data.carts.products;
        this.newArray = data?.carts?.[0]?.products || [];

        this.cart = data;
        console.log(this.newArray);
      },
      (error) => {}
    );
  }

  naviagateTohome() {
    return this.router.navigate(['/home']);
  }
}
