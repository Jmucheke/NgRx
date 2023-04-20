import { catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap, of } from "rxjs";
import { ProductService } from "../../product.service";
import * as productActions from '../actions/product.actions'

@Injectable()

export class ProductEffects {
  constructor(private actions$: Actions, private productService: ProductService) { }

  loadProduct$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(productActions.LoadProducts),
      mergeMap(action =>
        this.productService.getProducts().pipe(
          map(products =>
            productActions.LoadProductsSuccess({ products })),
          catchError(error => of(productActions.LoadProductsFailure({ error })))
        ))
    )
  })

}
