import auth from '../modules/auth';

const Authentication = {
  async signUp(email, password, password_confirmation){
    try {
      const { data } = await auth.signUp({
        email: email,
        password: password,
        password_confirmation: password_confirmation
      });
      return data;
    } catch (error) {
      return error;
    }
  }

}

export default Authentication;
