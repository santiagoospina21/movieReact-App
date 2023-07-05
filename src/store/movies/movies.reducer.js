import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  movies: [],
  tvShows: [],
  allData: [],
  currentData: [],
  buttonState: "all",
  searchField: "",
  detailsData: [],
  media: "",
  movieList: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState: INITIAL_STATE,
  reducers: {
    setMovies(state, action) {
      state.movies = action.payload;
    },
    setTvShows(state, action) {
      state.tvShows = action.payload;
    },
    setAllData(state, action) {
      state.allData = action.payload;
    },
    setButtonState(state, action) {
      state.buttonState = action.payload;
    },
    setSearchField(state, action) {
      state.searchField = action.payload;
    },
    setCurrentData(state, action) {
      state.currentData = action.payload;
    },
    setDetailsData(state, action) {
      state.detailsData = action.payload;
    },
    setMedia(state, action) {
      state.media = action.payload;
    },
    setMovieList(state, action) {
      state.movieList = action.payload;
    },
  },
});

export const {
  setMovies,
  setTvShows,
  setAllData,
  setButtonState,
  setSearchField,
  setCurrentData,
  setDetailsData,
  setMedia,
  setMovieList,
} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
