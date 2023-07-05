import {
  Backdrop,
  TitleContainer,
  Title,
  Container,
  ContainerInfo,
  Overview,
  VoteDetails,
  Type,
  Prueba,
} from "../details-media/details-media.styles";

const MoviesDetails = ({ movies }) => {
  const backdropBaseUrl = "https://image.tmdb.org/t/p/";
  const backdropSize = "original";
  const posterSize = "w500";

  return (
    <div>
      {Object.keys(movies).length ? (
        <div>
          <Backdrop>
            <img
              src={`${backdropBaseUrl}${backdropSize}${movies.backdrop_path}`}
            ></img>
          </Backdrop>
          <TitleContainer>
            <span>Sanflix / Movies </span>
            <Title>{`${movies.original_title}`}</Title>
          </TitleContainer>
          <Container>
            <img
              src={`${backdropBaseUrl}${posterSize}${movies.poster_path}`}
            ></img>

            <ContainerInfo>
              <Prueba>
                <Overview>{movies.overview}</Overview>
                <VoteDetails>{movies.vote_average.toFixed(1)}</VoteDetails>
              </Prueba>

              <span>Type</span>
              <Type>Movies</Type>
              <span>Release Date</span>
              <Type>{movies.release_date}</Type>
              <span>Run time</span>
              <Type>{`${movies.runtime} min`}</Type>
              <span>Genres</span>
              <Type>{movies.genres.map((genre) => genre.name).join(", ")}</Type>
            </ContainerInfo>
          </Container>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

export default MoviesDetails;
