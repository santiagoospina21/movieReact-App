export const selectMovies = (state) => state.movies.movies;

export const selectTvShows = (state) => state.movies.tvShows;

export const selectAllData = (state) => state.movies.allData;

export const selectButtonState = (state) => state.movies.buttonState;

export const selectSearchField = (state) => state.movies.searchField;

export const selectCurrentData = (state) => {
  if (state.movies.buttonState === "all") {
    return state.movies.allData;
  } else if (state.movies.buttonState === "movies") {
    return state.movies.movies;
  } else if (state.movies.buttonState === "tvshows") {
    return state.movies.tvShows;
  }
};

export const selectDetailsData = (state) => state.movies.detailsData;

export const selectMedia = (state) => state.movies.media;

export const selectMovieList = (state) => state.movies.movieList;

export const selectQuantity = (state) => state.movies.quantity;

export const selectFilterData = (state) => state.movies.filterData;
