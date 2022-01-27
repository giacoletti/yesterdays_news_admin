import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Authentication from "../modules/Authentication";
import { Typography, TextField, Box, Button, Alert } from "@mui/material";

const HomeView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { errorMessage } = useSelector((state) => state);
  const [userData, setUserData] = useState({});

  const handleChange = (event) => {
    debugger;
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async () => {
    const response = await Authentication.signIn(
      userData.email,
      userData.password
    );
    if (response.success) {
      dispatch({ type: "SET_CURRENT_USER", payload: response.data });
      navigate("dashboard");
    } else {
      dispatch({
        type: "SET_ERROR_MESSAGE",
        payload: response
      });
      setTimeout(() =>
        dispatch({
          type: "SET_ERROR_MESSAGE",
          payload: ''
        }),
        4000
      );
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        boxShadow: 3,
        maxWidth: "500px"
      }}
      noValidate
      autoComplete="off"
    >
      <Typography
        variant="h4"
        gutterBottom
        style={{ margin: "30px 10px" }}
        data-cy="home-view-header"
      >
        Welcome to the admin page
      </Typography>
      <TextField
        data-cy="login-email-input"
        label="Email"
        size="small"
        name="email"
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        data-cy="login-password-input"
        label="Password"
        size="small"
        name="password"
        onChange={handleChange}
        variant="outlined"
      />
      <Button variant="contained" onClick={handleSubmit} data-cy="login-button">
        Login
      </Button>
      <Button
        variant="outlined"
        onClick={() => navigate("registration")}
        data-cy="signup-button"
      >
        Sign up
      </Button>
      {errorMessage && (
        <Alert
          data-cy="flash-message"
          severity="error"
          sx={{ margin: "20px 10" }}
        >
          {errorMessage}
        </Alert>
      )}
    </Box>
  );
};

export default HomeView;
