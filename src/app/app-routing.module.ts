import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SliderComponent } from './slider/slider.component';
import { HomePage } from './home/home.page';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'splash', component: SliderComponent },
  { path: 'home', component: HomePage },
  { path: 'home/:term', component: ProductsComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent }

   
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
