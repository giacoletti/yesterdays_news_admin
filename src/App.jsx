import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateArticleView from "./components/CreateArticleView";
import HomeView from "./components/HomeView";

const App = () => {

  return (
    <>
      <h1 data-cy="header">Yesterdays News Admin</h1>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="article/create" element={<CreateArticleView />} />
      </Routes>
    </>
  );
};

export default App;
