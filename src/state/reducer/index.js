import { combineReducers } from "redux";
import {
  productListReducer,
  productDetailsReducer,
  productSaveReducer,
  productDeletesReducer,
} from "./productReducers";
import { cartReducer } from "./cartReducers";
import { userRegisterReducer, userSigninReducer } from "./userReducers";

export default combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  productSave: productSaveReducer,
  productDelete: productDeletesReducer,
});
