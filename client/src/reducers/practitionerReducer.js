import { createSlice } from "@reduxjs/toolkit";
import { getPractitioners } from "../services/practitioner";

const practitionerSlice = createSlice({
  name: "practitioner",
  initialState: [],
  reducers: {
    setPractitioner(state, action) {
      const practitioner = action.payload;

      return practitioner;
    },
  },
});

export const initializePractitioners = () => {
  return async (dispatch) => {
    const response = await getPractitioners();
    dispatch(setPractitioner(response));
  };
};

export const { setPractitioner } = practitionerSlice.actions;
export default practitionerSlice.reducer;
