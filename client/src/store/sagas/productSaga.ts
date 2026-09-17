import { call, put, takeLatest } from "redux-saga/effects";
import { getProducts } from "../../services/productApi";

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

export default function* productSaga() {
  yield takeLatest("FETCH_PRODUCTS", fetchProductsSaga);
}