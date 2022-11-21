import { Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http:HttpClient) {}

  getProducts():Observable<any>{
    return this._http.get('https://fakestoreapi.com/products')
  }

  getProductById(id:number):Observable<any>{
    return this._http.get(`https://fakestoreapi.com/products/${id}`)
  }
}
