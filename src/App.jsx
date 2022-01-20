import React from "react";
import { Routes, Route } from "react-router-dom";
import CreateArticleView from "./components/CreateArticleView";
import HomeView from "./components/HomeView";
import RegistrationForm from "./components/RegistrationForm";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="registration" element={<RegistrationForm />} />
        <Route path="/" element={<HomeView />} />
        <Route path="article/create" element={<CreateArticleView />} />
      </Routes>
    </>
  );
};

export default App;
