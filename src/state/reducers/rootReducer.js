const rootReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ERROR_MESSAGE':
      return {
        ...state,
        errorMessage: action.payload
      };
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      };
    case 'SET_WELCOME_MESSAGE':
      return {
        ...state,
        welcomeMessage: action.payload
      };

    default:
      return state;
  }
};

export default rootReducer;
