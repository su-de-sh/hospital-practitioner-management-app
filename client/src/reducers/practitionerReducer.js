import { createSlice } from "@reduxjs/toolkit";
import { addNewPractitioner, getPractitioners } from "../services/practitioner";

const practitionerSlice = createSlice({
  name: "practitioner",
  initialState: [],
  reducers: {
    setPractitioner(state, action) {
      const practitioner = action.payload;

      return practitioner;
    },
    addPractitionerinStore(state, action) {
      const practitioner = action.payload;
      state.push(practitioner);
    },
  },
});

export const initializePractitioners = () => {
  return async (dispatch) => {
    const response = await getPractitioners();
    dispatch(setPractitioner(response));
  };
};

export const addPractitioner = (practitioner) => {
  return async (dispatch) => {
    const response = await addNewPractitioner(practitioner);
    console.log("response ,practitionerReducer.js ,[26]", response);
    dispatch(addPractitionerinStore(response));
  };
};

export const { setPractitioner, addPractitionerinStore } =
  practitionerSlice.actions;
export default practitionerSlice.reducer;
