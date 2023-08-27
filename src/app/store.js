import { configureStore } from "@reduxjs/toolkit";
import platsSlice from "../feature/plats.slice";
import reseauxSlice from "../feature/reseaux.slice";
import generalSlice from "../feature/general.slice";

export default configureStore({
  reducer: {
    plats: platsSlice,
    reseaux: reseauxSlice,
    general: generalSlice,
  },
});
