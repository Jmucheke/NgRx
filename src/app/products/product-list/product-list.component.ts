import { Observable } from 'rxjs';
import { getShowProductCode, getCurrentProduct, getProducts } from './../state/selectors/products.selector';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';

import { Product } from '../product';
import { ProductService } from '../product.service';
import { State } from '../state/reducers/product.reducer';
import * as productActions from '../state/actions/product.actions'

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Products';
  errorMessage: string;

  displayCode: boolean;

  products: Product[];
  products$:Observable<Product[]>

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;

  constructor(private store: Store<State>, private productService: ProductService) { }

  ngOnInit(): void {
    // TODO: unsubscribe
    this.store.select(getCurrentProduct).subscribe(
      currentProduct => this.selectedProduct = currentProduct
    );

    this.products$ = this.store.select(getProducts)

    this.store.dispatch(productActions.LoadProducts())


    // TODO: unsubscribe
    this.store.select(getShowProductCode).subscribe(
      showProductCode => this.displayCode = showProductCode
    )
  }

  checkChanged(): void {
    this.store.dispatch(productActions.toggleProductCode())
    // this.displayCode = !this.displayCode;
  }

  newProduct(): void {
    // this.productService.changeSelectedProduct(this.productService.newProduct());
    this.store.dispatch(productActions.initializeCurrentProduct())
  }

  productSelected(product: Product): void {
    // this.productService.changeSelectedProduct(product);
    this.store.dispatch(productActions.setCurrentProduct({ product }))
  }

}
