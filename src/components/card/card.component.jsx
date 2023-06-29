import { CardContainer, Vote, Footer } from "./card.styles";
import { useNavigate } from "react-router-dom";

const Card = ({ movie }) => {
  const navigate = useNavigate();

  const posterBaseUrl = "https://image.tmdb.org/t/p/";
  const posterSize = "w500";
  return (
    <CardContainer key={movie.id} to={`/movies/details-movie/${movie.id}`}>
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
