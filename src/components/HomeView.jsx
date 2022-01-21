import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Authentication from "../modules/Authentication";

const HomeView = () => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({});
  const [message, setMessage] = useState();

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await Authentication.signIn(
      userData.email,
      userData.password
    );
    if (response.status === "success") {
      setMessage(response.status);
    } else {
      setMessage(response.message);
    }
  };

  return (
    <>
      <h3 data-cy="home-view-header">Welcome to the admin page</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label data-cy="login-email-label">Email:</label>
          <input
            onChange={handleChange}
            name="email"
            type="text"
            data-cy="login-email-input"
          />
        </div>
        <div>
          <label data-cy="login-password-label">Password:</label>
          <input
            onChange={handleChange}
            name="password"
            type="password"
            data-cy="login-password-input"
          />
        </div>

        <button data-cy="login-button">Login</button>
      </form>

      <button onClick={() => navigate("registration")} data-cy="signup-button">
        Sign up
      </button>
      <div data-cy="login-flash-message">{message}</div>
    </>
  );
};

export default HomeView;
