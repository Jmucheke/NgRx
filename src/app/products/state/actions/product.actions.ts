import { Product } from './../../product';
import { createAction, props } from '@ngrx/store';


export const toggleProductCode = createAction('[Product List Page] Toggle Product Code')
export const clearCurrentProduct = createAction('[Product Edit Page] Clear Current Product')
export const initializeCurrentProduct = createAction('[Product List Page] Init Current Product')

export const setCurrentProduct = createAction(
  '[Product List Page] Set Current Product',
  props<{currentProductId:number}>()
  )

  // Load Product actions
export const LoadProducts = createAction(
  '[Product List Page] Load Products'
)

export const LoadProductsSuccess = createAction(
  '[Product List Page] Load Products Success',
  props<{products:Product[]}>()
)

export const LoadProductsFailure = createAction(
  '[Product List Page] Load Products Failure',
  props<{error:string}>()
)

// Update Product actions
export const UpdateProducts = createAction(
  '[Product edit Page] Update Products',
  props<{product:Product}>()
)

export const UpdateProductsSuccess = createAction(
  '[Product edit Page] Update Products Success',
  props<{ product: Product }>()
)

export const UpdateProductsFailure = createAction(
  '[Product edit Page] Update Products Failure',
  props<{ error: string }>()
)
