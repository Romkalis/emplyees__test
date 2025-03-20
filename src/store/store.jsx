import {configureStore} from "@reduxjs/toolkit";
import employeesReducer from "./employeesSlice.js";


export const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
  devTools: true
})



