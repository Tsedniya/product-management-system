import { call, put, takeLatest } from "redux-saga/effects";
import { createProduct,getProducts } from "../../services/productApi";


function* fetchProductsSaga(): Generator<any, void, any> {
  try {
    const products = yield call(getProducts);

    yield put({
      type: "FETCH_PRODUCTS_SUCCESS",
      payload: products,
    });
  } catch (error) {
    yield put({
      type: "FETCH_PRODUCTS_FAILURE",
      payload:
        error instanceof Error
          ? error.message
          : "Failed to fetch products",
    });
  }
}

function* createProductSaga(action: any): Generator<any, void, any> {
  try {
    const product = yield call(createProduct, action.payload);

    yield put({
      type: "CREATE_PRODUCT_SUCCESS",
      payload: product,
    });

    // Refresh the product list after creating
    yield put({
      type: "FETCH_PRODUCTS",
    });
  } catch (error) {
    yield put({
      type: "CREATE_PRODUCT_FAILURE",
      payload:
        error instanceof Error
          ? error.message
          : "Failed to create product",
    });
  }
}

export default function* productSaga() {
  yield takeLatest("FETCH_PRODUCTS", fetchProductsSaga);
  yield takeLatest("CREATE_PRODUCT", createProductSaga);

}