import auth from "./auth";

const Authentification = {
  async login(email, password) {
    try {
      const { data } = await auth.login({
        email: email,
        password: password,
      });
      return data;
    } catch (error) {
      return error;
    }
  },
};

export default Authentification;
