import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import Authentication from "../modules/Authentication";

const HomeView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errorMessage } = useSelector(state => state);
  const [userData, setUserData] = useState({});

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    const response = await Authentication.signIn(
      userData.email,
      userData.password
    );
    if(response.status === 'success'){
      dispatch({ type: 'SET_WELCOME_MESSAGE', payload: `Welcome ${response.data.name}!` });
      dispatch({ type: 'SET_CURRENT_USER', payload: response.data });
      navigate('dashboard', {
        state: { flash: `Welcome ${response.data.name}!`, currentUser: response.data },
      });
    } else {
      dispatch({
        type: 'SET_ERROR_MESSAGE',
        payload: response
      });
    }
  };

  return (
    <div>
      <h3 data-cy="home-view-header">Welcome to the admin page</h3>
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
      <input
        onClick={handleSubmit}
        type="button"
        value="Login"
        data-cy="login-button"
      />
      <button onClick={() => navigate("registration")} data-cy="signup-button">
        Sign up
      </button>
      <div data-cy="flash-message">{errorMessage}</div>
    </div>
  );
};

export default HomeView;
