import React, { useState } from "react";
import CreateArticleForm from "./CreateArticleForm";
import { Box, Alert } from "@mui/material";

const CreateArticleView = () => {
  const [message, setMessage] = useState();

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
        boxShadow: 3,
        maxWidth: "500px",
        padding: "20px",
        marginTop: "20px"
      }}
      noValidate
      autoComplete="off"
    >
      {message && (
        <Alert data-cy="message-box" severity="info">
          {message}
        </Alert>
      )}
      <CreateArticleForm onCreateMessage={setMessage} />
    </Box>
  );
};

export default CreateArticleView;
