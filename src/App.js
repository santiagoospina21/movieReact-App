import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Route, Routes } from "react-router-dom";

import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import Movies from "./components/routes/movies/movies.component";

import {
  setMovies,
  setTvShows,
  setAllData,
  setButtonState,
} from "./store/movies/movies.reducer";

import { selectButtonState } from "./store/movies/movies.selector";

function App() {
  const apiKey = "e1b22a6d327c893e2f41c1bc5b31242d";

  const dispatch = useDispatch();
  const buttonState = useSelector(selectButtonState);

  useEffect(() => {
    const movie_id = 385687;
    try {
      const fetchData = async () => {
        //Movies
        if (buttonState === "movies") {
          const movieResponse = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
          );

          const prueba = await fetch(
            `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}`
          );

          const pruebaData = await prueba.json();

          console.log(pruebaData);
          if (!movieResponse.ok)
            throw new Error("Error with the response API of movies");

          const movieData = await movieResponse.json();

          dispatch(setMovies(movieData.results));
        }

        //TV Shows
        else if (buttonState === "tvshows") {
          const tvShowsResponse = await fetch(
            `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`
          );
          if (!tvShowsResponse.ok)
            throw new Error("Error with the response API of tv shows");

          const tvShowsData = await tvShowsResponse.json();

          dispatch(setTvShows(tvShowsData.results));
        } else if (buttonState === "all") {
          const movieResponse = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
          );
          if (!movieResponse.ok)
            throw new Error("Error with the response API of movies");

          const movieData = await movieResponse.json();

          const tvShowsResponse = await fetch(
            `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`
          );
          if (!tvShowsResponse.ok)
            throw new Error("Error with the response API of tv shows");

          const tvShowsData = await tvShowsResponse.json();

          dispatch(setAllData([...movieData.results, ...tvShowsData.results]));
        }
      };

      fetchData();
    } catch (error) {
      console.error("Error al realizar la consulta a la API de TMDb:", error);
    }
  }, [buttonState]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
}

export default App;
