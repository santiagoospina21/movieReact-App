import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setMedia } from "../../store/movies/movies.reducer";
import {
  addCards,
  removeCards,
  setOpenModal,
  setIsLiked,
} from "../../store/favorites/favorites.reducer";
import {
  selectLikeCards,
  selectIsLiked,
} from "../../store/favorites/favorites.selector";

import { CardContainer, Vote, Footer, LikeFav } from "./card.styles";

const Card = ({ movie }) => {
  const dispatch = useDispatch();

  const [isHovered, setIsHovered] = useState(false);

  const likeCards = useSelector(selectLikeCards);

  const [isLiked, setIsLiked] = useState(
    likeCards.some((card) => card.id === movie.id)
  );

  const onHandlerMedia = () => {
    if (movie.original_title) {
      dispatch(setMedia("movie"));
    } else {
      dispatch(setMedia("tv"));
    }
  };

  const handleLikeClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (isLiked) {
      dispatch(setOpenModal(false));
      dispatch(removeCards(movie));
    } else {
      dispatch(setOpenModal(true));
      dispatch(addCards(movie));
    }
    setIsLiked(!isLiked);
  };

  const posterBaseUrl = "https://image.tmdb.org/t/p/";
  const posterSize = "w500";
  return (
    <CardContainer
      key={movie.id}
      to={`/movies/details-media/${movie.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onHandlerMedia}
    >
      <img
        src={`${posterBaseUrl}${posterSize}${movie.poster_path}`}
        alt={movie.original_title ? movie.original_title : movie.name}
      ></img>
      <Vote>{movie.vote_average.toFixed(1)}</Vote>
      <LikeFav
        isLiked={isLiked}
        isHovered={isHovered}
        onClick={handleLikeClick}
      ></LikeFav>
      <Footer>
        <p>{movie.original_title ? movie.title : movie.name}</p>
      </Footer>
    </CardContainer>
  );
};

export default Card;
