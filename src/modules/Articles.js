import { api } from './network';

const Articles = {
  async create(article) {
    try {
      const { data } = await api.post('/articles', {
        article: article
      });
      return data;
    } catch (error) {
      return error;
    }
  }
};

export default Articles;
