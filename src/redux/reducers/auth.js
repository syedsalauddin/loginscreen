// userloaded  - User info loaded from backend to store
// if the user is authenticated only then we will get the user info loaded.

import { LOGIN_SUCCESS, REGISTER_SUCCESS } from "../types";

// registerUser -
// Logged in successfully -

// Getting a token ===> user is authenticated ===> load user information.

// register fail
// auth fail
// auth success
// logout
// account deleted

// token has to be deleted ===> user authentication status is false

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true, // loading: true, will help to apply spinner.
  user: null,
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return { ...state, ...payload };

    default:
      return state;
  }
};
