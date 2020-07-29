import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-addproductnotreally',
  templateUrl: './addproductnotreally.component.html',
  styleUrls: ['./addproductnotreally.component.css']
})
export class AddproductnotreallyComponent implements OnInit {

  panelOpenState = false;
  // books:any;
  products$:Observable<any>;
  constructor(private productsservice:ProductsService) { }

  ngOnInit() {
    // this.books = this.booksservice.getBooks().subscribe(
    // (books)=> this.books = books
    // );
    //this.booksservice.addBooks();
    this.products$ = this.productsservice.getProducts();
  }



}
