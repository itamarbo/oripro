import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authservice:AuthService,
    private router:Router,
    private route:ActivatedRoute) { }
  
  email:string;
  password:string;

  ngOnInit() {
  }
  onSubmit(){
    this.authservice.login(this.email,this.password);
    this.router.navigate(['/welcome']);
  }
  

}

