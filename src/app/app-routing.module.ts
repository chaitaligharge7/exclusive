import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchComponent } from './search/search.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { ActiveCategoryComponent } from './active-category/active-category.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' // Ensures exact match for the empty path
  },
  {
    path: 'home',
    component: HomeComponent,

    children: [
      {
        path:'',component:DashboardComponent
      },
      { 
        path: 'login', component: LoginComponent ,
      },

      {
        path:'create-user',component:CreateUserComponent
      },
      {
        path:'forgotpass',component:ForgotPasswordComponent
      },
      {
        path:'product-detail/:id',component:ProductDetailComponent
      },
      {
        path:'search/:title',component:SearchComponent
      },
      {
        path:'addcart',component:AddCartComponent
      },
      {
        path:'contact',component:ContactComponent
      },{
        path:'about',component:AboutComponent
      },
      {
      path:'myaccount',component:MyAccountComponent},
      {
        path:'errorpage',component:ErrorpageComponent
      },
      {
        path:'wishlist',component:WishlistComponent
      }
      ,
      {
        path:'billingDetails/:id',component:BillingDetailsComponent
      },
      {
        path:'activeCategoryList/:category',component:ActiveCategoryComponent
      }

     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
