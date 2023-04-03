import { initialState } from './../products.state';
import { createReducer, on, createAction } from '@ngrx/store'
import { ProductState } from '../products.state'
import * as AppState from '../../../state/app.state'


export interface State extends AppState.State{
  products:ProductState
}

export const productReducer = createReducer<ProductState>(
  initialState,
  on(createAction('[Product] Toggle Product Code'), (state):ProductState => {



    return {
      ...state,
      showProductCode: !state.showProductCode
    }
  })
)
