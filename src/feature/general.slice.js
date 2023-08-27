import { createSlice } from "@reduxjs/toolkit";

export const generalSlice = createSlice({
  name: "general",
  initialState: {
    scrollPosition: "",
  },
  reducers: {
    scrollPosition: (state, { payload }) => {
      switch (payload) {
        case "reduceNav":
          state.scrollPosition = "reduceNav";
          break;
        case "biographySlice":
          state.scrollPosition = "biographySlice";
          break;
        case "chefSlice":
          state.scrollPosition = "chefSlice";
          break;
        default:
          state.scrollPosition = "initial";
      }
    },
  },
});

export default generalSlice.reducer;
export const { scrollPosition } = generalSlice.actions;
