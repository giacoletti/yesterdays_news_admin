import React, { useState } from "react";
import CreateArticleForm from "./components/CreateArticleForm";

const App = () => {
  const [message, setMessage] = useState();

  return (
    <>
      <h1 data-cy="header">Yesterdays News Admin</h1>
      <div data-cy="message">{message}</div>
      <CreateArticleForm onCreateMessage={setMessage} />
    </>
  );
};

export default App;
