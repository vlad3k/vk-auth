import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../types";

export default (state, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        error: null,
      };
    default:
      return state;
  }
};
