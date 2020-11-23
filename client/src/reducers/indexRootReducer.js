import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import resourceReducer from './resourceReducer';
import searchReducer from './searchReducer'
//brings together all of the other reducers
export default combineReducers({
  resource: resourceReducer, //NOTE: resource reducer may not be used
  search : searchReducer,
  auth: authReducer,
  errors: errorReducer
});