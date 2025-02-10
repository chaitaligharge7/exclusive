import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrl: './billing-details.component.css',
})
export class BillingDetailsComponent implements OnInit {
  singleArray: any[] = [];

  productId: string | null = null;
  isSelected: boolean = false; // Tracks the selection state of the radio button


  product: any = null;
  selectedPayment:string='';

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: { [x: string]: any }) => {
      this.productId = params['id']; // 'id' is the parameter defined in the route configuration
      console.log('Route parameter:', this.productId);

      if (this.productId) {
        this.getSingleProduct(this.productId);
      }
    });
  }

  getSingleProduct(productId: string) {
    this.userService.getSingleProduct(productId).subscribe(
      (data) => {
        this.singleArray = data.images;
        this.product = data;
        console.log(data);
      },
      (error) => {}
    );
  }

  placeOrder(){
    alert('Your Order Has been placed successfully')
  }
}
