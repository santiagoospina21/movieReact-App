import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setMedia } from "../../store/movies/movies.reducer";
import { setIsWatched } from "../../store/favorites/favorites.reducer";

import {
  addCards,
  removeCards,
  setOpenModal,
} from "../../store/favorites/favorites.reducer";

import { selectLikeCards } from "../../store/favorites/favorites.selector";

import { CardContainer, Vote, Footer, LikeFav, AddMedia } from "./card.styles";

const Card = ({ movie, additionalData }) => {
  const posterBaseUrl = "https://image.tmdb.org/t/p/";
  const posterSize = "w500";

  console.log(movie);
  const dispatch = useDispatch();

  const [isHovered, setIsHovered] = useState(false);
  const likeCards = useSelector(selectLikeCards);
  console.log(likeCards);
  const [isLiked, setIsLiked] = useState(
    likeCards.some((card) => card.id === movie.id)
  );

  const card = likeCards.find((card) => card.id === movie.id);
  const isWatched = card ? card.isWatched : false;

  const onHandlerMedia = () => {
    if (movie.original_title) {
      dispatch(setMedia("movie"));
    } else {
      dispatch(setMedia("tv"));
    }
  };

  const handleLikeClick = (e) => {
    e.preventDefault();

    if (isLiked) {
      dispatch(setOpenModal(false));
      dispatch(removeCards(movie));
    } else {
      dispatch(setOpenModal(true));
      dispatch(addCards(movie));
    }
    setIsLiked(!isLiked);
  };

  const handleWatched = (e) => {
    e.preventDefault();

    dispatch(setIsWatched({ id: movie.id, isWatched: !isWatched }));
  };

  return (
    <CardContainer
      key={movie.id}
      to={`/movies/details-media/${movie.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onHandlerMedia}
      additionalData={additionalData}
    >
      <img
        src={`${posterBaseUrl}${posterSize}${movie.poster_path}`}
        alt={movie.original_title ? movie.title : movie.name}
      ></img>
      <Vote>{movie.vote_average.toFixed(1)}</Vote>
      <LikeFav
        isLiked={isLiked}
        isHovered={isHovered}
        onClick={handleLikeClick}
      ></LikeFav>
      <Footer>
        <p>{movie.original_title ? movie.title : movie.name}</p>
        {additionalData && (
          <AddMedia onClick={handleWatched} isWatched={isWatched}>
            {isWatched ? "Already Watched" : "Add to watched"}
          </AddMedia>
        )}
      </Footer>
    </CardContainer>
  );
};

export default Card;
