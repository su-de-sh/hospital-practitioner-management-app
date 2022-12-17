import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./reducers/messageReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    messages: messageReducer,
  },
});

export default store;
