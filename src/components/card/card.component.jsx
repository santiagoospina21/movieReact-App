import { CardContainer, Vote, Footer } from "./card.styles";

import { useDispatch } from "react-redux";
import { setMedia } from "../../store/movies/movies.reducer";

const Card = ({ movie }) => {
  const dispatch = useDispatch();

  const onHandlerMedia = () => {
    if (movie.original_title) {
      dispatch(setMedia("movie"));
    } else dispatch(setMedia("tv"));
  };

  const posterBaseUrl = "https://image.tmdb.org/t/p/";
  const posterSize = "w500";
  return (
    <CardContainer
      key={movie.id}
      to={`/movies/details-media/${movie.id}`}
      onClick={onHandlerMedia}
    >
      <img
        src={`${posterBaseUrl}${posterSize}${movie.poster_path}`}
        alt={movie.original_title ? movie.original_title : movie.name}
      ></img>
      <Vote>{movie.vote_average}</Vote>
      <Footer>
        <p>{movie.original_title ? movie.original_title : movie.name}</p>
      </Footer>
    </CardContainer>
  );
};

export default Card;
