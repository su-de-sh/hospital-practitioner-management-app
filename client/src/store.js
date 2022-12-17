import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./reducers/messageReducer";
import userReducer from "./reducers/userReducer";
import practitionerReducer from "./reducers/practitionerReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    messages: messageReducer,
    practitioners: practitionerReducer,
  },
});

export default store;
