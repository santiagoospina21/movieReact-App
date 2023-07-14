import { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Buttons from "../../buttons/buttons.component";
import InputSearchComponent from "../../inputsearch/inputsearch.component";
import MediaFilter from "../../mediaFilter/mediaFilter.component";

import Modal from "../../modal/modal.component";

import {
  selectButtonState,
  selectCurrentData,
} from "../../../store/movies/movies.selector";

import { Title, AllContainer } from "./home.styles";

import { setButtonState } from "../../../store/movies/movies.reducer";

const Home = () => {
  const dispatch = useDispatch();
  const buttonState = useSelector(selectButtonState);
  const currentData = useSelector(selectCurrentData);

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

      <InputSearchComponent />

      <Buttons
        buttonState={buttonState}
        buttonMoviesHandler={buttonMoviesHandler}
        buttonTvShowsHandler={buttonTvShowsHandler}
        buttonAllHandler={buttonAllHandler}
      />

      <Modal />

      <AllContainer>
        {currentData ? (
          <MediaFilter currentData={currentData} />
        ) : (
          <h1>Loading...</h1>
        )}
      </AllContainer>
    </Fragment>
  );
};

export default Home;
