import React, { useState } from "react";
import Articles from "../modules/Articles";
import utils from "../modules/utils";

const CreateArticleForm = ({ onCreateMessage }) => {
  const [article, setArticle] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await Articles.create(article);
    onCreateMessage(response);
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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label data-cy="title-label">
            Title<br />
            <input
              name="title"
              type="text"
              data-cy="title-input"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label data-cy="body-label">
            Article body<br />
            <textarea
              name="body"
              data-cy="body-input"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <select
            data-cy="category-select"
            name="category"
            onChange={handleChange}
          >
            <option value="">--select category--</option>
            <option value="news">News</option>
            <option value="politics">Politics</option>
            <option value="economy">Economy</option>
            <option value="sports">Sports</option>
          </select>
        </div>
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
        <button data-cy="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default CreateArticleForm;
