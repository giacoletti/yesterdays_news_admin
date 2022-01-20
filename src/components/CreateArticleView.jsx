import React, { useState } from 'react';
import CreateArticleForm from "./CreateArticleForm";
const CreateArticleView = () => {
  const [message, setMessage] = useState();

  return (
    <>
      <div data-cy="message-box">{message}</div>
      <CreateArticleForm onCreateMessage={setMessage} />
    </>
  );
};

export default CreateArticleView;
