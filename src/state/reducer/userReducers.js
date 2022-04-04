import * as ActionType from "../constants/userConstants";

export const userSigninReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.USER_SIGNIN_REQUEST:
      return { loading: true };
    case ActionType.USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: payload };
    case ActionType.USER_SIGNIN_FAIL:
      return { loading: false, error: payload };
    case "LOGOUT":
      return (state = {});
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case ActionType.USER_REGISTER_REQUEST:
      return { loading: true };
    case ActionType.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: payload };
    case ActionType.USER_REGISTER_FAIL:
      return { loading: false, error: payload };
    case "LOGOUT":
      return (state = {});
    default:
      return state;
  }
};
