import auth from "./auth";

const Authentification = {
  async logIn(email, password) {
    try {
      const { data } = await auth.logIn({
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
