import { createSlice } from "@reduxjs/toolkit";
import { signUp } from "../services/user";

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
    const user = await signUp(email, password);

    dispatch(setUser(user));
  };
};

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
