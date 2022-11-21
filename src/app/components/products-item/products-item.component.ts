import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss']
})
export class ProductsItemComponent implements OnInit {
  productId:any
  product$:Observable<any>
  constructor(private _activeRouter:ActivatedRoute , private _productsService:ProductsService) { 
    this.productId = this._activeRouter.snapshot.paramMap.get('id');
    this.product$ = this._productsService.getProductById(this.productId) as any
  }

  ngOnInit(): void {
  }

}
