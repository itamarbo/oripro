import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(public authservice:AuthService, public router:Router) { }

  email: string;
  password: string;
  
  onSubmit(){
    this.authservice.signup(this.email, this.password);
    this.router.navigate(['/welcome']);
  }
  ngOnInit() {

  }

}
