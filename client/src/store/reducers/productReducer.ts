import type { Product } from "../../types/product";

interface ProductState {
  products: Product[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

const productReducer = (
  state = initialState,
  action: any
): ProductState => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "FETCH_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload,
        loading: false,
      };

    case "FETCH_PRODUCTS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "CREATE_PRODUCT":
      return {
        ...state,
        loading: true,
        error: null,
      };

    case "CREATE_PRODUCT_SUCCESS":
      return {
        ...state,
        loading: false,
      };

    case "CREATE_PRODUCT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default productReducer;