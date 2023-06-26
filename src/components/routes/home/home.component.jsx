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

const Home = ({ movies }) => {
  const [searchField, setSearchField] = useState("");
  const [moviesFilter, setMoviesFilter] = useState(movies);
  const [currentButton, setCurrentButton] = useState("");

  useEffect(() => {
    const newMovies = movies.filter((movie) =>
      movie.original_title.toLowerCase().includes(searchField)
    );
    setMoviesFilter(newMovies);
  }, [searchField, setMoviesFilter, movies]);

  const onChangeSearch = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
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
        <ButtonAll>All</ButtonAll>
        <ButtonMovies>Movies</ButtonMovies>
        <ButtonTV>TV Shows</ButtonTV>
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
