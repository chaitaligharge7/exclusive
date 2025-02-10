import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../userService';

@Component({
  selector: 'app-active-category',
  templateUrl: './active-category.component.html',
  styleUrl: './active-category.component.css',
})
export class ActiveCategoryComponent implements OnInit {
  CategoryArray: any[] = [];
  product: any ;
  // category: string = ''; // Set a default category

  category: string | null = null;
  categoryName: any;

  constructor(
    private router: Router,
    private userservice: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.getProductsByCategories(this.category);

    this.route.params.subscribe((params) => {
      this.category = params['category']; // 'category' is the parameter defined in the route configuration
      console.log('Route parameter:', this.category);

      if (this.category) {
        this.getProductsByCategories(this.category);
      }
    });
  }

  getProductsByCategories(category: string) {
    this.userservice.getProductsByCategory(category).subscribe(
      (data) => {
        this.CategoryArray = data.products;
        this.categoryName = this.CategoryArray[0].category; // Store category separately

        // this.product=data.products;
      },
      (error) => {}
    );
  }



  GoToDetails(id:string){
    this.router.navigate(['/home/product-detail',id]);
  }
}
