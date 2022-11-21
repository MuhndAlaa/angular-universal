import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { SEOService } from 'src/app/services/seo.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products$: any;
  constructor(
    private _productsService: ProductsService,
    private _seoServive: SEOService
  ) {
    this.products$ = this._productsService.getProducts();
  }

  ngOnInit(): void {
    this._seoServive.addCanonicalURL()
  }
}
