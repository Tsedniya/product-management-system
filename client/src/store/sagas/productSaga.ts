import { call, put, takeLatest } from "redux-saga/effects";
import {
  createProduct,
  getProducts,
  updateProduct,
} from "../../services/productApi";

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
    yield call(createProduct, action.payload);

    yield put({
      type: "CREATE_PRODUCT_SUCCESS",
    });

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

function* updateProductSaga(action: any): Generator<any, void, any> {
  try {
    const { id, product } = action.payload;

    yield call(updateProduct, id, product);

    yield put({
      type: "UPDATE_PRODUCT_SUCCESS",
    });

    yield put({
      type: "FETCH_PRODUCTS",
    });
  } catch (error) {
    yield put({
      type: "UPDATE_PRODUCT_FAILURE",
      payload:
        error instanceof Error
          ? error.message
          : "Failed to update product",
    });
  }
}

export default function* productSaga() {
  yield takeLatest("FETCH_PRODUCTS", fetchProductsSaga);
  yield takeLatest("CREATE_PRODUCT", createProductSaga);
  yield takeLatest("UPDATE_PRODUCT", updateProductSaga);
}