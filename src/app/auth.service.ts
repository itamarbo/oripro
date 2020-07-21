import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './interfaces/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<User | null>;

  constructor(public afAuth:AngularFireAuth, private router:Router) {
    this.user = this.afAuth.authState;
   }

   signup(email:string, password:string){
    this.afAuth
    .createUserWithEmailAndPassword(email,password)
    .catch(function(error) {
     // Handle Errors here.
     // var errorCode = error.code;
     var errorMessage = error.message;
     alert(errorMessage);
     console.log(error);
   });
    //  .then
   //  (res => { console.log('Succesful Signup', res);
   //  this.router.navigate(['/login']);
   // }
   //  )
 }

  logout(){
    this.afAuth.signOut().then(res => console.log('Yahuuu', res));
    this.router.navigate (['/login'])
  }

  login(email:string, password:string){
    this.afAuth
    .signInWithEmailAndPassword(email,password).then
    (res =>{ this.router.navigate (['/successlogin']),
             console.log('Succesful Login', res)})
    .catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      console.log(error);
      console.log(errorCode);
    });
  }
}