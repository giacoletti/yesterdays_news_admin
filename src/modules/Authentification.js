import auth from "./auth";

const Authentification = {
  async signIn(email, password) {
    try {
      const { data } = await auth.signIn({
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
