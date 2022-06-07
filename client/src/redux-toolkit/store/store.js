import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../slice/index";

const store = configureStore({ reducer: rootReducer });

export default store;
