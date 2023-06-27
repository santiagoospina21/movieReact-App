import { Fragment, useState, useEffect } from "react";

import Card from "../../card/card.component";

import {
  Title,
  InputSearch,
  Input,
  ButtonsContainer,
  ButtonAll,
  ButtonMovies,
  ButtonTV,
  AllContainer,
} from "./home.styles";

const Home = ({ movies, tvShows, allData, buttonState }) => {
  const [searchField, setSearchField] = useState("");
  const [moviesFilter, setMoviesFilter] = useState(movies);
  const [currentButton, setCurrentButton] = useState(buttonState);
  const [arrayData, setArrayData] = useState([]);

  useEffect(() => {
    if (currentButton === "all") {
      setArrayData(allData);
    } else if (currentButton === "movies") {
      setArrayData(movies);
    } else if (currentButton === "tvshows") {
      setArrayData(tvShows);
    }
  }, [currentButton, allData, movies, tvShows]);

  useEffect(() => {
    const newMovies = arrayData.filter((movie) =>
      movie.original_title
        ? movie.original_title.toLowerCase().includes(searchField)
        : movie.name.toLowerCase().includes(searchField)
    );
    setMoviesFilter(newMovies);
  }, [searchField, setMoviesFilter, arrayData, currentButton]);

  const onChangeSearch = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const buttonMoviesHandler = () => {
    setCurrentButton("movies");
  };

  const buttonTvShowsHandler = () => {
    setCurrentButton("tvshows");
  };

  const buttonAllHandler = () => {
    setCurrentButton("all");
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
      <InputSearch>
        <Input
          placeholder="Search Movies or TV Shows"
          onChange={onChangeSearch}
        ></Input>
      </InputSearch>

      <ButtonsContainer>
        <ButtonAll active={currentButton === "all"} onClick={buttonAllHandler}>
          All
        </ButtonAll>
        <ButtonMovies
          active={currentButton === "movies"}
          onClick={buttonMoviesHandler}
        >
          Movies
        </ButtonMovies>
        <ButtonTV
          active={currentButton === "tvshows"}
          onClick={buttonTvShowsHandler}
        >
          TV Shows
        </ButtonTV>
      </ButtonsContainer>
      <AllContainer>
        {movies ? (
          moviesFilter.map((movie) => <Card movie={movie} />)
        ) : (
          <h1>Loading...</h1>
        )}
      </AllContainer>
    </Fragment>
  );
};

export default Home;
