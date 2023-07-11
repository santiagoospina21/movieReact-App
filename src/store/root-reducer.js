import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { moviesReducer } from "./movies/movies.reducer";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["movies"],
};

const moviesPersistConfig = {
  key: "movies",
  storage,
  blacklist: ["searchField", "filterData"],
};

const rootReducer = combineReducers({
  movies: persistReducer(moviesPersistConfig, moviesReducer),
});

export default persistReducer(rootPersistConfig, rootReducer);
