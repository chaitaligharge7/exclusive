import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private loginurl = 'https://dummyjson.com/user/login';
  private addurl = 'https://dummyjson.com/users/add';
  private forgotPasswordUrl = 'https://dummyjson.com/users/1';
  private getAllProductCategory = 'https://dummyjson.com/products/categories';
  private productUrl = 'https://dummyjson.com/products';
  private SingleProductUrl = 'https://dummyjson.com/products/id';
  private getCartByuser = 'https://dummyjson.com/carts/user';
  private updateCarturl = 'https://dummyjson.com/carts/2';
  private commentUrl = 'https://dummyjson.com/comments/add';
  private productByCategory = 'https://dummyjson.com/products/category';

  constructor(private http: HttpClient) {}

  //login user
  login(
    username: string,
    password: string,
    expiresInMins: number = 30
  ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      username,
      password,
      expiresInMins, // Optional, defaults to 60 as per the API documentation
    };

    return this.http.post<any>(this.loginurl, body, { headers });
  }

  //add new user
  createUser(
    firstName: string,
    lastName: string,
    username: string,
    password: string,
    age: number
  ) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      firstName,
      lastName,
      username,
      password,
      age, // Optional, defaults to 60 as per the API documentation
    };
    return this.http.post<any>(this.addurl, body, { headers });
  }

  //forgot password
  // forgotPassword(username: string, password: string, confirmPassword: string): Observable<any> {
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });

  //   const body = {
  //     username,
  //     password,
  //     confirmPassword,
  //   };

  //   return this.http.put<any>(this.forgotPasswordUrl, body, { headers });
  // }

  forgotPassword(
    id: number,
    password: string,
    confirmPassword: string
  ): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      id,
      password,
      confirmPassword,
    };

    return this.http.put<any>(this.forgotPasswordUrl, body, { headers });
  }

  getAllCategory() {
    return this.http.get<any>(this.getAllProductCategory);
  }

  getAllProducts() {
    return this.http.get<any>(this.productUrl);
  }

  getSingleProduct(productId: string) {
    return this.http.get<any>(`${this.productUrl}/${productId}`);
  }

  searchProduct(productName: String) {
    return this.http.get<any>(
      `https://dummyjson.com/products/search?q=${productName}`
    );
  }

  getCartByUser(productId: string) {
    return this.http.get<any>(`${this.getCartByuser}/142`);
  }

  addtoCart(id: string, quantity: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const body = {
      merge: true,
      products: [
        {
          id: id,
          quantity: quantity,
        },
      ],
    };
    return this.http.put<any>(this.updateCarturl, body, { headers });
  }

  commnetPost(body: String, postID: number, userID: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const Body = {
      body: body,
      postId: 3,
      userId: 5,
    };
    return this.http.post<any>(this.commentUrl, Body, { headers });
  }

  getProductsByCategory(category: string) {
    return this.http.get<any>(
      `https://dummyjson.com/products/category/${category}`
    );
  }
}
