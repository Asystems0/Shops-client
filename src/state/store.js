import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";
import Cookie from "js-cookie";

import rootReducer from "./reducer";

const cartItems = Cookie.get("cartItems")
  ? JSON.parse(Cookie.get("cartItems"))
  : [];

const userInfo = Cookie.get("userInfo")
  ? JSON.parse(Cookie.get("userInfo"))
  : [];

const initialState = {
  cart: { cartItems, shipping: {}, payment: {} },
  userSignin: { userInfo },
};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
