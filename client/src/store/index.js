import { applyMiddleware, createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../reducer";


const store = configureStore(
    { reducer: rootReducer },
    composeWithDevTools(applyMiddleware(thunk)))

export default store;