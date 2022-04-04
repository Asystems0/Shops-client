import axios from "axios";
import Cookie from "js-cookie";

import * as ActionType from "../constants/cartConstants";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`);
    dispatch({
      type: ActionType.CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        qty,
      },
    });

    const {
      cart: { cartItems },
    } = getState();

    Cookie.set("cartItems", JSON.stringify(cartItems));
  } catch (err) {}
};

export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({ type: ActionType.CART_REMOVE_ITEM, payload: productId });

  const userState = getState();

  if (userState && userState.cart.cartItems.length === 0) {
    Cookie.remove("cartItems");
  } else {
    const {
      cart: { cartItems },
    } = getState;

    Cookie.set("cartItems", JSON.stringify(cartItems));
  }
};

export const saveShipping = (data) => (dispatch) => {
  dispatch({ type: ActionType.CART_SAVE_SHIPPING, payload: data });
};

export const savePayment = (data) => (dispatch) => {
  dispatch({ type: ActionType.CART_SAVE_PAYMENT, payload: data });
};
