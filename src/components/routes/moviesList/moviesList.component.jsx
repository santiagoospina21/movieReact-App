import { MoviesTitle } from "./moviesList.styles";

import InputSearchComponent from "../../inputsearch/inputsearch.component";
import MediaFilter from "../../mediaFilter/mediaFilter.component";
import { AllContainer } from "../home/home.styles";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { selectMovieList } from "../../../store/movies/movies.selector";
import { setMovieList } from "../../../store/movies/movies.reducer";

const MoviesList = () => {
  const apiKey = "e1b22a6d327c893e2f41c1bc5b31242d";
  const genreId = 27;
  const page = 1;

  const dispatch = useDispatch();
  const movies = useSelector(selectMovieList);

  useEffect(() => {
    const fetchMovies = async () => {
      const movieResponse = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genreId}&page=${page}`
      );

      const dataMovies = await movieResponse.json();

      dispatch(setMovieList(dataMovies.results));
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <MoviesTitle>
        <span>Sanflix</span>
        <h1>Movies</h1>
      </MoviesTitle>
      <InputSearchComponent />

      <AllContainer>
        <MediaFilter currentData={movies} />
      </AllContainer>
    </div>
  );
};
export default MoviesList;
