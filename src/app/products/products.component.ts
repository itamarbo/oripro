import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  name;
  id;
  Quantity;
  
    constructor(private router: Router, private productservice:ProductsService) { }
  
    onSubmit() {
    this.productservice.addProducts(this.name,this.id,this.Quantity);
   this.router.navigate(['/products']);
    }
    ngOnInit() {
    }
  }
 


