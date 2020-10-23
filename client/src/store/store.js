import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import indexRootReducer from "../reducers/indexRootReducer";
const initialState = {};
const middleware = [thunk];
const store = createStore(
  indexRootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;