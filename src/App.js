import { useState, useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import Movies from "./components/routes/movies/movies.component";

import "./App.css";

function App() {
  const apiKey = "e1b22a6d327c893e2f41c1bc5b31242d";

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    try {
      const fetchMovies = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
        );
        if (!response.ok) {
          throw new Error("Error en la respuesta de la API");
        }
        const data = await response.json();

        setMovies(data.results);
      };
      fetchMovies();
    } catch (error) {
      console.error("Error al realizar la consulta a la API de TMDb:", error);
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home movies={movies} />} />
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
}

export default App;
