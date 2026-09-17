export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const fetchProducts = () => ({
  type: FETCH_PRODUCTS,
});

export const createProduct = (product: {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  image: string;
}) => ({
  type: CREATE_PRODUCT,
  payload: product,
});

export const updateProduct = (
  id: string,
  product: {
    name: string;
    description: string;
    price: number;
    category: string;
    stock: number;
    image: string;
  }
) => ({
  type: UPDATE_PRODUCT,
  payload: {
    id,
    product,
  },
});