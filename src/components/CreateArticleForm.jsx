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

  const handleImage = async (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    const encodedFile = await imageEncoder(file);
    setArticle({ ...article, image: encodedFile });
  };

  const imageEncoder = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      if (file) {
        reader.readAsDataURL(file);
        reader.onload = () => {
          resolve(reader.result);
        };
      }
      reader.onerror = (error) => reject(error);
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
          <input
            accept="image/*"
            type="file"
            onChange={handleImage}
            name="image"
            alt="foo"
            data-cy="image-input"
          />
          <button data-cy="submit-button">Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateArticleForm;
