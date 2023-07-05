import React from "react";
import Card from "../card/card.component";

import { useSelector } from "react-redux";
import { selectSearchField } from "../../store/movies/movies.selector";

const MediaFilter = ({ currentData }) => {
  const searchField = useSelector(selectSearchField);

  const moviesFilter = currentData.filter((movie) =>
    movie.original_title
      ? movie.original_title.toLowerCase().includes(searchField)
      : movie.name.toLowerCase().includes(searchField)
  );

  return (
    <>
      {currentData ? (
        moviesFilter.map((movie) => <Card movie={movie} key={movie.id} />)
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default MediaFilter;
