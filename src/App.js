import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Route, Routes } from "react-router-dom";

import Navigation from "./components/routes/navigation/navigation.component";
import Home from "./components/routes/home/home.component";
import Movies from "./components/routes/movies/movies.component";
import Favorites from "./components/routes/favorites/favorites.component";
import SignIn from "./components/routes/sign-in/sign-in.component";
import TvShows from "./components/routes/tvshows/tvshows.component";

import { selectButtonState } from "./store/movies/movies.selector";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  getFavoritesFromFirestore,
  saveFavoritesToFirestore,
} from "./utils/firebase/firebase.utils";

import {
  setMovies,
  setTvShows,
  setAllData,
} from "./store/movies/movies.reducer";

import { setCurrentUser } from "./store/user/user.reducer";
import { selectCurrentUser } from "./store/user/user.selector";
import { setFavorites } from "./store/favorites/favorites.reducer";
import { selectLikeCards } from "./store/favorites/favorites.selector";

function App() {
  const apiKey = "e1b22a6d327c893e2f41c1bc5b31242d";

  const dispatch = useDispatch();
  const buttonState = useSelector(selectButtonState);
  const currentUser = useSelector(selectCurrentUser);
  const favorites = useSelector(selectLikeCards);

  const [prevUserId, setPrevUserId] = useState(null);

  /*   useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }

      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []); */

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
          dispatch(setFavorites(favoritesData)); // Aquí debes tener una acción setFavorites para actualizar los "favorites" en Redux en función de los datos que recuperas de Firestore
        }
      }
    };

    loadFavorites();
  }, [currentUser]);

  // Guardamos los "favorites" en Firestore cada vez que cambie
  useEffect(() => {
    const saveFavoritesToFirestoreAsync = async () => {
      if (currentUser) {
        // Guarda los "favorites" en Firestore solo si el usuario está autenticado
        saveFavoritesToFirestore(currentUser, favorites);

        setPrevUserId(currentUser.uid);
      }
    };

    saveFavoritesToFirestoreAsync();
  }, [currentUser, favorites, prevUserId]);

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
        <Route path="home" element={<Home />} />
        <Route path="movies/*" element={<Movies />} />
        <Route path="tvshows/*" element={<TvShows />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="sign-in" element={<SignIn />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
