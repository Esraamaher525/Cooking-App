import { Component } from '@angular/core';
import { ProductsServiceService } from '../services/products-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 
  constructor(private menu: MenuController,public productService:ProductsServiceService, private route: ActivatedRoute, private router: Router ) {
  }
  //navigate to products
   goTovegetablesProduct(name){
    this.productService.myMethod(name);
    this.router.navigate(['home', name]);  
  }
  // menu
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
