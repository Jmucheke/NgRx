import { initialState } from './../products.state';
import { createReducer, on, createAction } from '@ngrx/store'
import { ProductState } from '../products.state'
import * as AppState from '../../../state/app.state'
import * as productActions from '../actions/product.actions'


export interface State extends AppState.State {
  products: ProductState
}

export const productReducer = createReducer<ProductState>(
  initialState,
  on(productActions.toggleProductCode, (state): ProductState => {



    return {
      ...state,
      showProductCode: !state.showProductCode
    }
  }),
  on(productActions.setCurrentProduct, (state, action): ProductState => {
    return {
      ...state,
      currentProductId: action.currentProductId
    }
  }),
  on(productActions.clearCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId: null
    }
  }),
  on(productActions.initializeCurrentProduct, (state): ProductState => {
    return {
      ...state,
      currentProductId:0
    }
  }),
  on(productActions.LoadProductsSuccess, (state, action): ProductState => {
    return {
      ...state,
      products: action.products,
      error:''
    }
  }),
  on(productActions.LoadProductsFailure, (state, action): ProductState => {
    return {
      ...state,
      products: [],
      error: action.error
    }
  })
)
