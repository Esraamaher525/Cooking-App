import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../services/products-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
public data;
public id;
public productCategory;
public products;
public item;
  constructor(public productService:ProductsServiceService,private activatedRoute: ActivatedRoute,private http: HttpClient) { 
    this.id=this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  async ngOnInit() {
  
    this.productCategory=this.productService.details;
    this.products=this.productCategory.products;
    for(let product in this.products){
      if(this.id===this.products[product].id){
        this.item=this.products[product]
      }
     }
    }
}
