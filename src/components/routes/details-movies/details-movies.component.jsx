import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { selectDetailsData } from "../../../store/movies/movies.selector";

import { setDetailsData } from "../../../store/movies/movies.reducer";

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
} from "./details-movies.styles";

const DetailsMovies = () => {
  const { id } = useParams();
  const apiKey = "e1b22a6d327c893e2f41c1bc5b31242d";
  const backdropBaseUrl = "https://image.tmdb.org/t/p/";
  const backdropSize = "original";
  const posterSize = "w500";

  const dispatch = useDispatch();
  const detailsData = useSelector(selectDetailsData);

  useEffect(() => {
    try {
      const fetchDataDetail = async () => {
        const details = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );

        const detailsDataFetch = await details.json();

        dispatch(setDetailsData(detailsDataFetch));
        console.log(detailsDataFetch);
      };

      fetchDataDetail();
    } catch (error) {
      console.error("Error al realizar la consulta a la API de TMDb:", error);
    }
  }, []);

  return (
    <div>
      <Backdrop>
        <img
          src={`${backdropBaseUrl}${backdropSize}${detailsData.backdrop_path}`}
        ></img>
      </Backdrop>

      <TitleContainer>
        <span>Sanflix / Movies </span>
        <Title>{`${detailsData.original_title}`}</Title>
      </TitleContainer>

      <Container>
        <img
          src={`${backdropBaseUrl}${posterSize}${detailsData.poster_path}`}
        ></img>

        <ContainerInfo>
          <Prueba>
            {" "}
            <Overview>{detailsData.overview}</Overview>
            <VoteDetails>{detailsData.vote_average.toFixed(1)}</VoteDetails>
          </Prueba>

          <span>Type</span>
          <Type>Movies</Type>
          <span>Release Date</span>
          <Type>{detailsData.release_date}</Type>
          <span>Run time</span>
          <Type>{`${detailsData.runtime} min`}</Type>
          <span>Genres</span>
          <Type>
            {detailsData.genres.map((genre) => genre.name).join(", ")}
          </Type>
        </ContainerInfo>
      </Container>
    </div>
  );
};

export default DetailsMovies;
