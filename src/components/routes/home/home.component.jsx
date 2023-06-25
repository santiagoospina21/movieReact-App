import { Fragment } from "react";

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
        <Input placeholder="Search Movies or TV Shows"></Input>
      </InputSearch>

      <ButtonsContainer>
        <ButtonAll>All</ButtonAll>
        <ButtonMovies>Movies</ButtonMovies>
        <ButtonTV>TV Shows</ButtonTV>
      </ButtonsContainer>
      <AllContainer>
        {movies ? (
          movies.filter((_, i) => i < 4).map((movie) => <Card movie={movie} />)
        ) : (
          <p>Loading...</p>
        )}
      </AllContainer>
    </Fragment>
  );
};

export default Home;
