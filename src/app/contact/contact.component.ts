import { Component, OnInit } from '@angular/core';
import { UserService } from '../userService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}
  message: any = '';

  body: string = '';
  postID: number = 3;
  userID: number = 5;

  ngOnInit(): void {}

  sendMessage(Body: string, postID: number, userID: number) {
    this.userService.commnetPost(Body, 3, 5).subscribe(
      (data) => {
        this.message = data;
        console.log(this.message);
        alert('Your Message has been posted');
        this.body = '';
      },
      (error) => {}
    );
  }
}
