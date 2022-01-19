import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import LoginForm from './components/LoginForm';
import CreateArticleView from './components/CreateArticleView';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/authenticate" element={<LoginForm />} />
      <Route path="article/create" element={<CreateArticleView />} />
    </Routes>
  );
};

export default App;
