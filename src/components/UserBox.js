import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import AuthContext from "../context/auth/authContext";

const UserBox = (props) => {
  const authContext = useContext(AuthContext);

  const {
    error,
    user,
    isAuthenticated,
    checkLogin,
    loginUser,
    logout,
  } = authContext;

  const loginButton = () => (
    <Button onClick={() => loginUser()}>Войти через ВК</Button>
  );

  useEffect(() => {
    checkLogin();
    // eslint-disable-next-line
  }, []);
  if (error) {
    return loginButton();
  }
  if (isAuthenticated) {
    return (
      <div>
        <div>Привет, {user.first_name}!</div>
        <Button onClick={logout}>Выйти!</Button>
      </div>
    );
  } else {
    return loginButton();
  }
};

export default UserBox;
