import { createSlice } from "@reduxjs/toolkit";
import { addNewPractitioner, getPractitioners } from "../services/practitioner";
import practitionerService from "../services/practitioner";
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
    deletePractitioner(state, action) {
      const id = action.payload;
      return state.filter((x) => x.id !== id);
    },
  },
});

export const initializePractitioners = () => {
  return async (dispatch) => {
    const response = await practitionerService.getAll();
    dispatch(setPractitioner(response));
  };
};

export const addPractitioner = (practitioner) => {
  return async (dispatch) => {
    const response = await practitionerService.create(practitioner);

    dispatch(addPractitionerinStore(response));
  };
};
export const removePractitioner = (id) => {
  return async (dispatch) => {
    await practitionerService.remove(id);
    dispatch(deletePractitioner(id));
  };
};

export const { setPractitioner, addPractitionerinStore, deletePractitioner } =
  practitionerSlice.actions;
export default practitionerSlice.reducer;
