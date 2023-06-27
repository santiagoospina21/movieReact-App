import { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import Movies from "./components/routes/movies/movies.component";

import "./App.css";

function App() {
  const apiKey = "e1b22a6d327c893e2f41c1bc5b31242d";

  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);
  const [allData, setAllData] = useState([]);
  const [buttonState, setButtonState] = useState("all");

  console.log(buttonState);

  useEffect(() => {
    try {
      const fetchData = async () => {
        //Movies
        if (buttonState === "movies") {
          const movieResponse = await fetch(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
          );
          if (!movieResponse.ok)
            throw new Error("Error with the response API of movies");

          const movieData = await movieResponse.json();
          setMovies(movieData.results);
        }

        //TV Shows
        else if (buttonState === "tvshows") {
          const tvShowsResponse = await fetch(
            `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}`
          );
          if (!tvShowsResponse.ok)
            throw new Error("Error with the response API of tv shows");

          const tvShowsData = await tvShowsResponse.json();
          setTvShows(tvShowsData.results);
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

          setAllData([...movieData.results, ...tvShowsData.results]);
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
        <Route
          index
          element={
            <Home
              movies={movies}
              tvShows={tvShows}
              allData={allData}
              buttonState={buttonState}
            />
          }
        />
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
}

export default App;
