import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { SEOService } from 'src/app/services/seo.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.scss'],
})
export class ProductsItemComponent implements OnInit {
  productId: any;
  product$: Observable<any>;
  product: any;
  constructor(
    private _activeRouter: ActivatedRoute,
    private _productsService: ProductsService,
    private _seoService:SEOService,
  ) {
    this.productId = this._activeRouter.snapshot.paramMap.get('id');
    this.product$ = this._productsService.getProductById(this.productId) as any;
  }

  ngOnInit(): void {
    this.product$.subscribe((product) => {
      this.product = product;
      this._seoService.addCanonicalURL();
      this._seoService.setPageTitle(`product no.${product.id}`);
      this._seoService.addPageTags([
        { name: 'description', content: `${product.description}` },
        { name: 'og:title', content: `${product.title}` },
        { name: 'og:description', content: `${product.description}` },
        { name: 'twitter:title', content: `${product.title}` },
        { name: 'twitter:description', content: `${product.description}` },
      ]);
    });
  }
}
