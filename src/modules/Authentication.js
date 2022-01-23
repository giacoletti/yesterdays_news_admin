import auth from './auth';

const Authentication = {
  async signUp(name, email, password, password_confirmation) {
    try {
      const { data } = await auth.signUp({
        name: name,
        email: email,
        password: password,
        password_confirmation: password_confirmation
      });
      return data;
    } catch (error) {
      return error;
    }
  },
  async signIn(email, password) {
    try {
      const response = await auth.signIn(email, password);
      return response;
    } catch (error) {
      return error.response?.data.errors || error.message;
    }
  }
};

export default Authentication;
