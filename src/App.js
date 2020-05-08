import React from "react";
import AuthState from "./context/auth/AuthState";
import UserBox from "./components/UserBox";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <AuthState>
      <div className='container'>
        <UserBox />
      </div>
    </AuthState>
  );
};

export default App;
