import {
  Backdrop,
  TitleContainer,
  Title,
  Container,
  Prueba,
  Overview,
  VoteDetails,
  Type,
  ContainerInfo,
} from "../details-media/details-media.styles";

import {
  FirstColumn,
  SecondColumn,
  ColumnsContainer,
} from "./details-tvshows.styles";

const TvShowsDetails = ({ tvshow }) => {
  const backdropBaseUrl = "https://image.tmdb.org/t/p/";
  const backdropSize = "original";
  const posterSize = "w500";
  return (
    <div>
      <Backdrop>
        <img
          src={`${backdropBaseUrl}${backdropSize}${tvshow.backdrop_path}`}
        ></img>
      </Backdrop>
      <TitleContainer>
        <span>Sanflix / Tv Shows </span>
        <Title>{tvshow.name}</Title>
      </TitleContainer>

      <Container>
        <img src={`${backdropBaseUrl}${posterSize}${tvshow.poster_path}`}></img>

        <ContainerInfo>
          <Prueba>
            <Overview>{tvshow.overview}</Overview>
            <VoteDetails>{tvshow.vote_average.toFixed(1)}</VoteDetails>
          </Prueba>

          <ColumnsContainer>
            <FirstColumn>
              <span>Type</span>
              <Type>Tv Show</Type>
              <span>First air date</span>
              <Type>{tvshow.first_air_date}</Type>
              <span>No. of Seasons</span>
              <Type>{tvshow.number_of_seasons}</Type>
              <span>Episode run time</span>
              <Type>{`${tvshow.episode_run_time} min`}</Type>
              <span>Genres</span>
              <Type>{tvshow.genres.map((genre) => genre.name).join(", ")}</Type>
            </FirstColumn>

            <SecondColumn>
              <span>Status</span>
              <Type>{tvshow.status}</Type>
              <span>Last air date</span>
              <Type>{tvshow.last_air_date}</Type>
              <span>No. of episodes</span>
              <Type>{tvshow.number_of_episodes}</Type>
            </SecondColumn>
          </ColumnsContainer>
        </ContainerInfo>
      </Container>
    </div>
  );
};

export default TvShowsDetails;
