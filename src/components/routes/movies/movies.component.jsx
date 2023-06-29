import { Route, Routes } from "react-router-dom";

import MoviesList from "../moviesList/moviesList.component";
import DetailsMovies from "../details-movies/details-movies.component";

const Movies = () => {
  return (
    <Routes>
      <Route index element={<MoviesList />}></Route>
      <Route path="details-movie/:id" element={<DetailsMovies />}></Route>
    </Routes>
  );
};

export default Movies;
