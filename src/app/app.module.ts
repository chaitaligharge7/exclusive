import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { SearchComponent } from './search/search.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { ActiveCategoryComponent } from './active-category/active-category.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    CreateUserComponent,
    ForgotPasswordComponent,
    ProductDetailComponent,
    SearchComponent,
    WishlistComponent,
    AddCartComponent,
    ContactComponent,
    AboutComponent,
    MyAccountComponent,
    ErrorpageComponent,
    BillingDetailsComponent,
    ActiveCategoryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxStarRatingModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
