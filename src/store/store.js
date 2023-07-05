import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import persistReducer from "./root-reducer";

const middleware = [logger];

export const store = configureStore({
  reducer: persistReducer,
  middleware,
});

export const persistor = persistStore(store);
