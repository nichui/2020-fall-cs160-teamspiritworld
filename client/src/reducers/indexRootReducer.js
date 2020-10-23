import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import resourceReducer from './resourceReducer';
//brings together all of the other reducers
export default combineReducers({
  resource: resourceReducer,
  auth: authReducer,
  errors: errorReducer
});