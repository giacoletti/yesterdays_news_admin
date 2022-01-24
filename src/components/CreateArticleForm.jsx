import React, { useState } from "react";
import Articles from "../modules/Articles";

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
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label data-cy="title-label">
              Title<br></br>
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
              Article body<br></br>
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
          <button data-cy="submit-button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateArticleForm;
