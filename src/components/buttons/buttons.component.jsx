import {
  ButtonsContainer,
  ButtonAll,
  ButtonMovies,
  ButtonTV,
} from "./buttons.styles";

const Buttons = ({
  buttonState,
  buttonAllHandler,
  buttonTvShowsHandler,
  buttonMoviesHandler,
}) => {
  return (
    <ButtonsContainer>
      <ButtonAll active={buttonState === "all"} onClick={buttonAllHandler}>
        All
      </ButtonAll>
      <ButtonMovies
        active={buttonState === "movies"}
        onClick={buttonMoviesHandler}
      >
        Movies
      </ButtonMovies>
      <ButtonTV
        active={buttonState === "tvshows"}
        onClick={buttonTvShowsHandler}
      >
        TV Shows
      </ButtonTV>
    </ButtonsContainer>
  );
};

export default Buttons;
