import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const INITIAL_STATE = {
  movies: [],
  tvShows: [],
  allData: [],
  currentData: [],
  filterData: [],
  buttonState: "all",
  searchField: "",
  detailsData: [],
  media: "",
  movieList: [],
  tvShowsList: [],
  quantity: 0,
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
    setTvShowsList(state, action) {
      state.tvShowsList = action.payload;
    },
    setQuantity(state, action) {
      state.quantity = action.payload;
    },
    setFilterData(state, action) {
      state.filterData = action.payload;
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
  setQuantity,
  setFilterData,
  setTvShowsList,
} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
