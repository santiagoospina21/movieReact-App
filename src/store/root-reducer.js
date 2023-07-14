import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { moviesReducer } from "./movies/movies.reducer";
import { favoritesReducer } from "./favorites/favorites.reducer";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  blacklist: ["movies", "favorites"],
};

const moviesPersistConfig = {
  key: "movies",
  storage,
  blacklist: ["searchField", "filterData"],
};

const favoritesPersistConfig = {
  key: "favorites",
  storage,
  blacklist: ["likeCards"],
};

const rootReducer = combineReducers({
  movies: persistReducer(moviesPersistConfig, moviesReducer),
  favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
  /* favorites: favoritesReducer, */
});

export default persistReducer(rootPersistConfig, rootReducer);
