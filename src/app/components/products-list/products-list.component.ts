import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  products$:any
  constructor(private _productsService:ProductsService) { 
    this.products$ = this._productsService.getProducts()
  }

  ngOnInit(): void {
  }

}
