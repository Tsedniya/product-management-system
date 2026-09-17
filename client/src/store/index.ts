import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import productReducer from "./reducers/productReducer";
import productSaga from "./sagas/productSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    productReducer,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(productSaga);
export default store;