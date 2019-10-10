import { Component, OnInit } from '@angular/core';
import { ProductsServiceService } from '../services/products-service.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router } from '@angular/router';
 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  public type;
  public data;
  public productCategory;
 
  constructor( private router: Router,public productService:ProductsServiceService,private http: HttpClient,private activatedRoute: ActivatedRoute) {
    this.type=this.activatedRoute.snapshot.paramMap.get('term');
    console.log(this.type)
   }

 async ngOnInit() {
  await this.productService.myMethod$.subscribe( data => {
      this.data = data; // And he have data here too!
       console.log(this.data); 
  })
  //get data from api
  await this.http.get('https://5bcce576cf2e850013874767.mockapi.io/task/categories').subscribe(
    async dataapi => {
       console.log(dataapi)
       this.productCategory=dataapi;
       console.log( this.productCategory)
        for(let key in dataapi){
          if(this.type===dataapi[key].name){
            this.productCategory=dataapi[key];
            console.log(dataapi[key])
            this.productService.details=this.productCategory;
          }
        }
      }
    )
}

}