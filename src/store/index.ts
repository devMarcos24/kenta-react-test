import { configureStore } from "@reduxjs/toolkit";
import coffesReducer from "./modules/coffee/reducer";

export default configureStore({
  reducer: {
    coffees: coffesReducer,
  },
});
