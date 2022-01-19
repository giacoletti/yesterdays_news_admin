import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    if (location.state?.currentUser) {
      setCurrentUser(location.state.currentUser);
    }
  }, []);

  return (
    <>
      {location.state?.flash && (
        <h1 data-cy="flash-message">{location.state.flash} </h1>
      )}

      <h1 data-cy="header">Yesterdays News Admin </h1>
      {!currentUser && (
        <button
          onClick={() => navigate("/authenticate")}
          data-cy="authenticate"
        >
          Log in
        </button>
      )}
      {currentUser && (
        <button 
        onClick={() => navigate('/article/create')}
        data-cy="create-new-article">Create New Article</button>
      )}
    </>
  );
};

export default Dashboard;
