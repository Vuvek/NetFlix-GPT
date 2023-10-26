

export const formReducer = (state, action) => {
    switch (action.type) {
      case "name": {
        return {
          ...state,
          name: action.payload,
        };
      }
      case "email": {
        return {
          ...state,
          email: action.payload,
        };
      }
      case "password": {
        return {
          ...state,
          password: action.payload,
        };
      }
      case "signin": {
        return {
          email: state.email,
          password: state.password,
        };
      }
      case "signup": {
        return {
          ...state,
        };
      }
      default: {
        throw new Error("Unknown Action :" + action.type);
      }
    }
  };