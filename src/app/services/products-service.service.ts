import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  public details;
  myMethod$: Observable<any>;
  private myMethodSubject = new Subject<any>();
  constructor() {
    this.myMethod$ = this.myMethodSubject.asObservable();
   }
 
//method update data
   myMethod(data) {
    console.log(data); // I have data! Let's return it so subscribers can use it!
    // we can do stuff with data if we want
    this.myMethodSubject.next(data);   
   }
  
}
