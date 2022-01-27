import React, { useState } from "react";
import Articles from "../modules/Articles";
import utils from "../modules/utils";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const CreateArticleForm = ({ onCreateMessage }) => {
  const [article, setArticle] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await Articles.create(article);
    onCreateMessage(response);
    setTimeout(() => onCreateMessage(""), 4000);
  };

  const handleChange = (event) => {
    setArticle({
      ...article,
      [event.target.name]: event.target.value
    });
  };

  const handleImage = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const encodedFile = await utils.imageEncoder(file);
    setArticle({ ...article, image: encodedFile });
  };

  return (
    <>
      <TextField
        fullWidth
        data-cy="title-input"
        label="Title"
        name="title"
        size="small"
        onChange={handleChange}
        variant="outlined"
      />
      <TextField
        data-cy="body-input"
        fullWidth
        multiline
        rows={7}
        label="Article body"
        name="body"
        size="small"
        onChange={handleChange}
        variant="outlined"
      />
      <FormControl sx={{ width: "130px" }}>
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          style={{ width: "200px" }}
          data-cy="category-select"
          onChange={handleChange}
          name="category"
          label="Category"
        >
          <MenuItem data-cy="news-category" value={"news"}>News</MenuItem>
          <MenuItem data-cy="politics-category" value={"politics"}>Politics</MenuItem>
          <MenuItem data-cy="economy-category" value={"economy"}>Economy</MenuItem>
          <MenuItem data-cy="sports-category" value={"sports"}>Sports</MenuItem>
        </Select>
      </FormControl>
      <div>
        <input
          accept="image/*"
          type="file"
          onChange={handleImage}
          name="image"
          alt="foo"
          data-cy="image-input"
        />
      </div>
      <Button
        variant="contained"
        onClick={handleSubmit}
        data-cy="submit-button"
        endIcon={<SendIcon />}
      >
        Submit
      </Button>
    </>
  );
};

export default CreateArticleForm;
