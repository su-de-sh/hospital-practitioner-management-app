import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "../services/user";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUser(state, action) {
      const user = action.payload;

      return user;
    },
  },
});

export const logInUser = (email, password) => {
  return async (dispatch) => {
    const user = await signIn(email, password);

    dispatch(setUser(user));
  };
};
export const logOutUser = () => {
  return async (dispatch) => {
    window.localStorage.removeItem("user");

    dispatch(setUser(null));
  };
};

export const initializeUser = () => {
  return async (dispatch) => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log("user ,userReducer.js ,[25]", user);
    dispatch(setUser(user));
  };
};

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
