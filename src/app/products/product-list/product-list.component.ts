import { Observable } from 'rxjs';
import { getShowProductCode, getCurrentProduct, getProducts, getError } from './../state/selectors/products.selector';
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

  displayCode: boolean;

  products$:Observable<Product[]>

  // Used to highlight the selected product in the list
  selectedProduct$: Observable<Product>;
  displayCode$: Observable<boolean>;
  errorMessage$: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.selectedProduct$ = this.store.select(getCurrentProduct)

    this.products$ = this.store.select(getProducts)

    this.errorMessage$ = this.store.select(getError)

    this.store.dispatch(productActions.LoadProducts())


    this.displayCode$ = this.store.select(getShowProductCode)
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
    this.store.dispatch(productActions.setCurrentProduct({ currentProductId: product.id }))
  }

}
