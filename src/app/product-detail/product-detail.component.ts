import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  VisibleArray: any[] = [];
  singleArray: any[] = [];
  rating: number = 3; // Default rating
  productId: string | null = null;

  product: any = null;

  constructor(
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ShowLimitedProducts();
    // this.productId = this.route.snapshot.paramMap.get('id');
    // if (this.productId) {
    //   this.getSingleProduct(this.productId);
    // }

    this.route.params.subscribe((params) => {
      this.productId = params['id']; // 'id' is the parameter defined in the route configuration
      console.log('Route parameter:', this.productId);

      if (this.productId) {
        this.getSingleProduct(this.productId);
      }
    });
  }

  ShowLimitedProducts() {
    this.userService.getAllProducts().subscribe(
      (data) => {
        this.VisibleArray = data.products.slice(0, 7);
      },
      (error) => {
        console.error('Error fetching product  list:', error);
      }
    );
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

  onRateChange(event: any): void {
    console.log('New rating:', event.newValue);
    this.rating = event.newValue || 0;
  }

  goToDetail(productId: string) {
    this.router.navigate(['/home/product-detail', productId]); // Navigate to product detail page with ID
  }
  goToBilling(id: string) {
    this.router.navigate(['/home/billingDetails', id]); // Navigate to product detail page with ID
  }
}
