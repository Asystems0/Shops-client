import * as ActionType from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shipping: {}, payment: {} },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.CART_ADD_ITEM:
      const item = payload;
      const product = state.cartItems.find((x) => x.product === item.product);
      if (product) {
        return {
          cartItems: state.cartItems.map((x) =>
            x.product === product.product ? item : x
          ),
        };
      }
      return { cartItems: [...state.cartItems, item] };
    case ActionType.CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter((item) => item.product !== payload),
      };
    case ActionType.CART_SAVE_SHIPPING:
      return { ...state, shipping: payload };
    case ActionType.CART_SAVE_PAYMENT:
      return { ...state, payment: payload };
    case "LOGOUT":
      return (state = { cartItems: [] });
    default:
      return state;
  }
};
