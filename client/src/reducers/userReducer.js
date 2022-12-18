import { createSlice } from "@reduxjs/toolkit";
import { signIn } from "../services/user";

const userSlice = createSlice({
  name: "user",
  initialState: { user: null, isIntialized: false },
  reducers: {
    setUser(state, action) {
      const user = action.payload;

      return { user, isIntialized: true };
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
    dispatch(setUser(user));
  };
};

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
