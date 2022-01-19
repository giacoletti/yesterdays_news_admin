import React from "react";
import { useNavigate } from "react-router-dom";

const HomeView = () => {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("registration")} data-cy="signup-button">
        Sign up
      </button>
    </>
  );
};

export default HomeView;
