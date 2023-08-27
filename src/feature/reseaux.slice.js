import { createSlice } from "@reduxjs/toolkit";

export const reseauxSlice = createSlice({
  name: "reseaux",
  initialState: {
    reseaux: null,
  },
  reducers: {
    getReseauData: (state, action) => {
      state.reseaux = action.payload;
    },
  },
});

export default reseauxSlice.reducer;
export const { getReseauData } = reseauxSlice.actions;
