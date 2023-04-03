import { Product } from './../product';



export interface ProductState{
  showProductCode:boolean;
  currentProduct:Product;
  products:Product[]
}

export const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
}
