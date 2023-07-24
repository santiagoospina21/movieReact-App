import { useState } from "react";

import { useSelector } from "react-redux";

import MediaFilter from "../../mediaFilter/mediaFilter.component";

import { selectLikeCards } from "../../../store/favorites/favorites.selector";

import { MoviesTitle } from "../moviesList/moviesList.styles";
import { AllContainer } from "../home/home.styles";
import { ContainerEmpty } from "./favortes.style";

import fillRolls from "../../../img/film-rolls.svg";

const Favorites = () => {
  const likeCards = useSelector(selectLikeCards);
  return (
    <div>
      <MoviesTitle>
        <h1>Your Favorites</h1>
      </MoviesTitle>

      {likeCards.length > 0 ? (
        <AllContainer>
          <MediaFilter currentData={likeCards} additionalData={true} />
        </AllContainer>
      ) : (
        <ContainerEmpty>
          <img src={fillRolls} alt="filter-rolls" />
          <h1>You don't have favorite media</h1>
          <span>Explore our website and find what you like best.</span>
        </ContainerEmpty>
      )}
    </div>
  );
};
export default Favorites;
