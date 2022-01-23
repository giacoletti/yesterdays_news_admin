import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const { welcomeMessage } = useSelector(state => state);

  return (
    <h1 data-cy="flash-message">{welcomeMessage}</h1>
  );
};

export default Dashboard;
