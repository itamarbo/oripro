import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // products:any = [{name:'Alice in Wonderland', id:'5',qua:'4'},{name:'Alice in Wonderland' , id:'5',qua:'4'}];
  //db:any;
  // getBooks(){
  //   const booksObservable = new Observable(
  //     observer => {
  //       setInterval(
  //        ()=> observer.next(this.books),5000
  //       )
  //     }
  //   )
  //   return booksObservable;
  // }
  getProducts():Observable<any[]>{//any זה עיגול פינות מכיוון שבמקום זה צריך להגדיר אינטרפייס של אובייקט במקרה שלנו בוקס
 return this.db.collection('productss').valueChanges();
  }


  getProduct(id:string):Observable<any>{
    return this.db.doc(`productss/${id}`).get();
  }
  addProducts(name:string, id:number,Quantity:number){
  const product = {name:name, id:id, Quantity:Quantity };
  this.db.collection('productss').add(product);
  }
// addProducts(){
//     setInterval(
//     ()=> this.products.push ({name:'A new book', id:'New author', qua:'New author'}),
//     5000)
   
//  }

//  getProducts(){
//     setInterval(()=>this.products,1000)

//   }

  constructor(private db:AngularFirestore) { }//תיצור אובייקט מסוג אנגולר פיירסטור ותכניס אותו ל db
}
