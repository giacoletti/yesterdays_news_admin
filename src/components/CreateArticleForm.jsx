import React, { useState } from "react";
import Articles from "../modules/Articles";

const CreateArticleForm = (props) => {

  const [article, setArticle] = useState({});
  const [message, setMessage] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await Articles.create(article);
    setMessage(response.message);
  };

  const handleChange = (e) => {
    setArticle({
      ...article,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {message && <h1 data-cy="message-box">{message}</h1>}
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
              <option value="News">News</option>
              <option value="Politics">Politics</option>
              <option value="Economy">Economy</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
          <button data-cy="submit-button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateArticleForm;
