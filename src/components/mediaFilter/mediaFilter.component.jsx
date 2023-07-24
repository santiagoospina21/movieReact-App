import Card from "../card/card.component";

import { useSelector } from "react-redux";

import {
  selectFilterData,
  selectSearchField,
} from "../../store/movies/movies.selector";

const MediaFilter = ({ currentData, additionalData }) => {
  const searchField = useSelector(selectSearchField);
  const filterData = useSelector(selectFilterData);

  const moviesFilter = currentData.filter((movie) =>
    movie.original_title
      ? movie.original_title.toLowerCase().includes(searchField)
      : movie.name.toLowerCase().includes(searchField)
  );

  return (
    <>
      {filterData && filterData.length > 0
        ? filterData.map((movie) => (
            <Card
              movie={movie}
              key={movie.id}
              additionalData={additionalData}
            />
          ))
        : moviesFilter.map((movie) => (
            <Card
              movie={movie}
              key={movie.id}
              additionalData={additionalData}
            />
          ))}
    </>
  );
};

export default MediaFilter;
