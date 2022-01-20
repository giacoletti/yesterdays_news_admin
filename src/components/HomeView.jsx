import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
  const navigate = useNavigate();

  const AuthenticationForm = () => {
    const [userData, setUserData] = useState({});

    const handleChange = (event) => {
      setUserData({
        ...userData,
        [event.target.name]: event.target.value,
      });
      debugger;
    };
  };

  return (
    <>
      <h3 data-cy="home-view-header">Welcome to the admin page</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label data-cy="login-email-label">Email:</label>
          <input type="text" data-cy="login-email-input" />
        </div>
        <div>
          <label data-cy="login-password-label">Password:</label>
          <input type="password" data-cy="login-password-input" />
        </div>

        <button
          onClick={() => navigate("article/create")}
          data-cy="login-button"
        >
          Login
        </button>
      </form>
      <button onClick={() => navigate("registration")} data-cy="signup-button">
        Sign up
      </button>
    </>
  );
};

export default HomeView;
