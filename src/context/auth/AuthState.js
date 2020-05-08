import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../types";

const AuthState = (props) => {
  const initialState = {
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const checkLogin = React.useCallback(() => {
    // eslint-disable-next-line no-undef
    VK.Auth.getLoginStatus((res) => {
      if (res.session) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.session.user,
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error("Ошибка авторизации"),
        });
      }
    }, 4);
  }, [dispatch]);

  const loginUser = React.useCallback(() => {
    // eslint-disable-next-line no-undef
    VK.Auth.login((r) => {
      if (r.session) {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: r.session.user,
        });
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error("Ошибка авторизации"),
        });
      }
    }, 4);
  }, [dispatch]);

  /*   const logout = () => {
    // eslint-disable-next-line no-undef
    VK.Auth.logout((r) => {
      console.log(r);
      dispatch({
        type: LOGOUT,
      });
    });
  }; */

  const context = React.useMemo(
    () => ({
      ...state,
      loginUser,
      checkLogin,
    }),
    [state, loginUser, checkLogin]
  );

  return (
    <AuthContext.Provider value={context}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
