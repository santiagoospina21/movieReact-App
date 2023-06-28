import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middleware = [logger];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export default store;
