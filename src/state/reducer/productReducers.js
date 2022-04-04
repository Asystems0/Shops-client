import * as ActionType from "../constants/productConstants";

export const productListReducer = (state = { products: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case ActionType.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: payload };
    case ActionType.PRODUCT_LIST_FAIL:
      return { loading: false, error: payload };
    case "LOGOUT":
      return (state = { products: [] });
    default:
      return state;
  }
};

export const productDetailsReducer = (state = { product: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.PRODUCT_DETAILS_REQUEST:
      return { loading: true };
    case ActionType.PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: payload };
    case ActionType.PRODUCT_DETAILS_FAIL:
      return { loading: false, error: payload };
    case "LOGOUT":
      return (state = { products: [] });
    default:
      return state;
  }
};

export const productDeletesReducer = (state = { product: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.PRODUCT_DELETE_REQUEST:
      return { loading: true };
    case ActionType.PRODUCT_DELETE_SUCCESS:
      return { loading: false, product: payload, success: true };
    case ActionType.PRODUCT_DELETE_FAIL:
      return { loading: false, error: payload };
    case "LOGOUT":
      return (state = { products: [] });
    default:
      return state;
  }
};

export const productSaveReducer = (state = { product: {} }, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.PRODUCT_SAVE_REQUEST:
      return { loading: true };
    case ActionType.PRODUCT_SAVE_SUCCESS:
      return { loading: false, success: true, product: payload };
    case ActionType.PRODUCT_SAVE_FAIL:
      return { loading: false, error: payload };
    case "LOGOUT":
      return (state = { products: [] });
    default:
      return state;
  }
};
