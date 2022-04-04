import axios from "axios";

import * as ActionType from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ActionType.PRODUCT_LIST_REQUEST });
    const { data } = await axios.get(
      "/api/products"
      // "/api/products?category=" +
      //   category +
      //   "&searchKeyword=" +
      //   searchKeyword +
      //   "&sortOrder=" +
      //   sortOrder
    );
    dispatch({ type: ActionType.PRODUCT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ActionType.PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const saveProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch({ type: ActionType.PRODUCT_SAVE_REQUEST, payload: product });
    const {
      userSignin: { userInfo },
    } = getState();

    if (!product._id) {
      const { data } = await axios.post("/api/products", product, {
        headers: {
          authorization: userInfo.token,
        },
      });
      dispatch({ type: ActionType.PRODUCT_SAVE_SUCCESS, payload: data });
    } else {
      const { data } = await axios.put(
        `/api/products/${product._id}`,
        product,
        {
          headers: {
            authorization: userInfo.token,
          },
        }
      );
      dispatch({ type: ActionType.PRODUCT_SAVE_SUCCESS, payload: data });
    }
  } catch (err) {
    dispatch({ type: ActionType.PRODUCT_SAVE_FAIL, payload: err.message });
  }
};

export const detailsProduct = (productId) => async (dispatch) => {
  try {
    dispatch({
      type: ActionType.PRODUCT_DETAILS_REQUEST,
      payload: productId,
    });
    const { data } = await axios.get(`/api/products/${productId}`);
    dispatch({ type: ActionType.PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ActionType.PRODUCT_DETAILS_FAIL,
      payload: error.message,
    });
  }
};

export const deleteProduct = (productId) => async (dispatch, getState) => {
  try {
    const {
      userSignin: { userInfo },
    } = getState();
    dispatch({ type: ActionType.PRODUCT_DELETE_REQUEST, payload: productId });
    const { data } = await axios.delete(`/api/products/${productId}`, {
      headers: {
        authorization: userInfo.token,
      },
    });
    dispatch({
      type: ActionType.PRODUCT_DELETE_SUCCESS,
      payload: data,
      success: true,
    });
  } catch (error) {
    dispatch({ type: ActionType.PRODUCT_DELETE_FAIL, payload: error.message });
  }
};
