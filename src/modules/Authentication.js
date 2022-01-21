import auth from './auth';

const Authentication = {
  async signUp(name, email, password, password_confirmation){
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
      const { data } = await auth.signIn({
        email: email,
        password: password,
      });
      return data;
    } catch (error) {
      return error;
    }
  }
}

export default Authentication;
