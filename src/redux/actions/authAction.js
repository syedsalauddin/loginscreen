import axios from "axios";
import { REGISTER_SUCCESS } from "../types";

// used to perform the rest calls or common business logic

// to register the user it's a common requirement.

export const register = ({ name, email, password }) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const response = await axios.post("/api/users", body, config);

    // this dispatch will help connect to reducer via thunk also will pass data
    dispatch({ type: REGISTER_SUCCESS, payload: response.data });
  } catch (e) {}
};
