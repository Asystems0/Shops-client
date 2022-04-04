import axios from "axios";
import Cookie from "js-cookie";

import * as ActionType from "../constants/userConstants";
import { listProducts } from "./productActions";

export const signin = (email, password) => async (dispatch) => {
  dispatch({
    type: ActionType.USER_SIGNIN_REQUEST,
    payload: { email, password },
  });

  try {
    const { data } = await axios.post(
      "https://shops4u.herokuapp.com/api/user/signin",
      { email, password }
    );
    dispatch({ type: ActionType.USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: ActionType.USER_SIGNIN_FAIL,
      payload: err.response.data.msg,
    });
  }
};

export const register = (name, email, password) => async (dispatch) => {
  dispatch({
    type: ActionType.USER_REGISTER_REQUEST,
    payload: { name, email, password },
  });

  try {
    const { data } = await axios.post(
      "https://shops4u.herokuapp.com/api/user/register",
      {
        email,
        password,
        name,
      }
    );
    dispatch({ type: ActionType.USER_REGISTER_SUCCESS, payload: data });
    Cookie.set("userInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: ActionType.USER_REGISTER_FAIL,
      payload: err.response.data.msg,
    });
  }
};

export const logOut = () => (dispatch) => {
  dispatch({ type: "LOGOUT" });
  dispatch(listProducts());
  Cookie.set("userInfo", "");
  Cookie.set("cartItems", "");
};
