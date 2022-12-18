import { createSlice } from "@reduxjs/toolkit";
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
    editPractitioner(state, action) {
      const id = action.payload.id;
      const filterState = state.filter((x) => x.id !== id);
      console.log("filterState ,practitionerReducer.js ,[19]", filterState);
      const newState = [...filterState, action.payload];
      return newState;
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

export const updatePractitioner = (id, practitioner) => {
  return async (dispatch) => {
    console.log("practitioner ,practitionerReducer.js ,[53]", practitioner);
    const updatedPractitioner = await practitionerService.update(
      id,
      practitioner
    );
    dispatch(editPractitioner(updatedPractitioner));
  };
};

export const {
  setPractitioner,
  addPractitionerinStore,
  deletePractitioner,
  editPractitioner,
} = practitionerSlice.actions;
export default practitionerSlice.reducer;
