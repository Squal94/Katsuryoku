import { createSlice } from "@reduxjs/toolkit";

export const platsSlice = createSlice({
  name: "plats",
  initialState: {
    category: "",
    plats: "",
  },
  reducers: {
    getPlatsdata: (state, action) => {
      state.plats = action.payload;
    },
    getCategoryChoice: (state, action) => {
      state.category = action.payload;
    },
  },
});

export default platsSlice.reducer;
export const { getPlatsdata, getCategoryChoice } = platsSlice.actions;
