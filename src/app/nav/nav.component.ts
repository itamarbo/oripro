import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    title1:string;
    title2:string;
    constructor(private breakpointObserver: BreakpointObserver, public authService:AuthService, public location:Location, router:Router) {
      router.events.subscribe(val => {
        if (location.path() == "/signup") {
          this.title1 = 'Register ';
          this.title2 = '';
          console.log(val)
        } else if(location.path() == "/login") {
          this.title1 = '';
          this.title2 = 'Login';
        } 
        else  {
          // this.title1 = "Register";
          this.title2 = "Login";
        } 
        // else {
        //   this.title1 = "ss ";
        //   this.title2 = "ss ";
        // }
      });    
    
    }
  
}
