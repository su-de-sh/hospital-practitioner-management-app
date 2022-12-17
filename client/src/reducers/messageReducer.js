import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: null,
  reducers: {
    setMessage(state, action) {
      const message = action.payload;

      return message;
    },
  },
});

export const setMessageObject = (message) => {
  return async (dispatch) => {
    dispatch(setMessage(message));
    setTimeout(() => {
      dispatch(setMessage(null));
    }, 5000);
  };
};

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;
