import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "../products.state";


const getProductFeatureState = createFeatureSelector<ProductState>('products');

export const getShowProductCode = createSelector(
  getProductFeatureState, // selector requires to retrieve the esired bit of state
  state => state.showProductCode // projector function ~ gets the resolve of the selector functions
)

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct
)

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products
)


