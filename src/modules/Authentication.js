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
  signIn(email, password) {
    return async (dispatch, navigate) => {
      try {
        const credentials = await auth.signIn(email, password);
        debugger;
        // return credentials;
        navigate("/dashboard", {
          state: { flash: `Welcome random!`, currentUser: credentials.data },
        });
      } catch (error) {
        debugger;
        dispatch({ type: 'SET_ERROR_MESSAGE', payload: error.response.data.errors });
      }
    };
  }
};

export default Authentication;
