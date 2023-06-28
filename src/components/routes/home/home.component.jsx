import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import Card from "../../card/card.component";
import Buttons from "../../buttons/buttons.component";
import InputSearchComponent from "../../inputsearch/inputsearch.component";

import {
  selectButtonState,
  selectSearchField,
  selectCurrentData,
} from "../../../store/movies/movies.selector";

import { Title, AllContainer } from "./home.styles";

import {
  setButtonState,
  setSearchField,
} from "../../../store/movies/movies.reducer";

const Home = () => {
  const dispatch = useDispatch();

  const buttonState = useSelector(selectButtonState);
  const searchField = useSelector(selectSearchField);
  const currentData = useSelector(selectCurrentData);

  const moviesFilter = currentData.filter((movie) =>
    movie.original_title
      ? movie.original_title.toLowerCase().includes(searchField)
      : movie.name.toLowerCase().includes(searchField)
  );

  const onChangeSearch = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    dispatch(setSearchField(searchFieldString));
  };

  const buttonMoviesHandler = () => {
    dispatch(setButtonState("movies"));
  };

  const buttonTvShowsHandler = () => {
    dispatch(setButtonState("tvshows"));
  };

  const buttonAllHandler = () => {
    dispatch(setButtonState("all"));
  };

  return (
    <Fragment>
      <Title>
        <h1>SanFlix</h1>
        <p>
          List of movies and TV shows. Explore and see your favorites series and
          movies all in one place.
        </p>
      </Title>

      <InputSearchComponent onChangeSearch={onChangeSearch} />

      <Buttons
        buttonState={buttonState}
        buttonMoviesHandler={buttonMoviesHandler}
        buttonTvShowsHandler={buttonTvShowsHandler}
        buttonAllHandler={buttonAllHandler}
      />

      <AllContainer>
        {currentData ? (
          moviesFilter.map((movie) => <Card movie={movie} />)
        ) : (
          <h1>Loading...</h1>
        )}
      </AllContainer>
    </Fragment>
  );
};

export default Home;
