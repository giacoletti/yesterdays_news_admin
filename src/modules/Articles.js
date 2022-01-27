import { api } from "./network";

const Articles = {
  async create(article) {
    try {
      const headers = JSON.parse(localStorage.getItem('J-tockAuth-Storage'));
      const { data } = await api.post("/articles", {
        article: {
          title: article.title,
          body: article.body,
          category: article.category,
          image: article.image
        },
        headers: headers
      });
      return data.message;
    } catch (error) {
      return error.response?.data.errors || error.message;
    }
  }
};

export default Articles;
