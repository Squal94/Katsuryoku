import { createSlice } from "@reduxjs/toolkit";

export const platsSlice = createSlice({
  name: "plats",
  initialState: {
    category: "Entree",
    plats: "",
  },
  reducers: {
    getCategoryChoice: (state, action) => {
      state.category = action.payload;
    },
    getPlatsdata: (state, action) => {
      state.plats = action.payload;
      console.log(state.plats);
    },
  },
});

export default platsSlice.reducer;
export const { getPlatsdata, getCategoryChoice } = platsSlice.actions;
