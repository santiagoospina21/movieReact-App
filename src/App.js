import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Route, Routes, useNavigate } from "react-router-dom";

import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import Movies from "./components/routes/movies/movies.component";
import Favorites from "./components/routes/favorites/favorites.component";
import SignIn from "./components/routes/sign-in/sign-in.component";
import TvShows from "./components/routes/tvshows/tvshows.component";
import Error404 from "./components/routes/Error/error.component";
import Intro from "./components/routes/intro/intro.component";

import { selectButtonState } from "./store/movies/movies.selector";
import { selectCurrentUser } from "./store/user/user.selector";
import { selectLikeCards } from "./store/favorites/favorites.selector";

import { setCurrentUser } from "./store/user/user.reducer";
import { setLikeCards } from "./store/favorites/favorites.reducer";
import {
  setMovies,
  setTvShows,
  setAllData,
} from "./store/movies/movies.reducer";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  getFavoritesFromFirestore,
  saveFavoritesToFirestore,
} from "./utils/firebase/firebase.utils";

function App() {
  const apiKey = "e1b22a6d327c893e2f41c1bc5b31242d";

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const buttonState = useSelector(selectButtonState);
  const currentUser = useSelector(selectCurrentUser);
  const likeCards = useSelector(selectLikeCards);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      if (user) {
        try {
          await createUserDocumentFromAuth(user);
          dispatch(setCurrentUser(user));
        } catch (error) {
          console.error("Error al actualizar el usuario actual:", error);
        }
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    return unsubscribe;
  }, []);

  //Recuperar Data from Firestore
  useEffect(() => {
    // Cargamos los "favorites" desde Firestore cuando el usuario inicie sesión
    const loadFavorites = async () => {
      if (currentUser) {
        const favoritesData = await getFavoritesFromFirestore(currentUser);
        if (favoritesData) {
          dispatch(setLikeCards(favoritesData));
        }
      } else if (currentUser === null) {
        dispatch(setLikeCards([]));
      }
    };

    loadFavorites();
  }, [currentUser]);

  // Guardamos los "favorites" en Firestore cada vez que cambie
  useEffect(() => {
    const saveFavoritesToFirestoreAsync = async () => {
      if (currentUser) {
        // Guarda los "favorites" en Firestore solo si el usuario está autenticado
        saveFavoritesToFirestore(currentUser, likeCards);
      }
    };

    saveFavoritesToFirestoreAsync();
  }, [likeCards]);

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
        }
        //All
        else if (buttonState === "all") {
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
      navigate("/404");
    }
  }, [buttonState]);

  return (
    <Routes>
      <Route path="intro" element={<Intro />}></Route>
      <Route index element={<Intro />} />
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<Home />} />
        <Route path="movies/*" element={<Movies />} />
        <Route path="tvshows/*" element={<TvShows />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="sign-in" element={<SignIn />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
