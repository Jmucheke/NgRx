import { Product } from './../product';



export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[],
  error: string
}

export const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: ''
}
