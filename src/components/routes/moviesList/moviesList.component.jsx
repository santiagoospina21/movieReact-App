import InputSearchComponent from "../../inputsearch/inputsearch.component";
import MediaFilter from "../../mediaFilter/mediaFilter.component";
import SelectorComponent from "../../selector/selector.component";

import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  selectFilterData,
  selectMovieList,
  selectQuantity,
  selectSearchField,
} from "../../../store/movies/movies.selector";

import {
  setFilterData,
  setMovieList,
  setQuantity,
} from "../../../store/movies/movies.reducer";

import { AllContainer } from "../home/home.styles";

import {
  MoviesTitle,
  Quantity,
  Container,
  SelectContainer,
  PaginationContainer,
} from "./moviesList.styles";

const MoviesList = () => {
  const dispatch = useDispatch();

  const apiKey = "e1b22a6d327c893e2f41c1bc5b31242d";
  const genreId = 28;

  const [selectedGenre, setSelectedGenre] = useState(genreId);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterPagesCount, setFilterPagesCount] = useState(400);

  const searchField = useSelector(selectSearchField);
  const filterData = useSelector(selectFilterData);
  const movies = useSelector(selectMovieList);
  const quantity = useSelector(selectQuantity);

  useEffect(() => {
    try {
      const fetchMovies = async () => {
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenre}&page=${currentPage}`
        );

        if (!movieResponse.ok) throw Error("Error with the API data server");

        const dataMovies = await movieResponse.json();

        dispatch(setMovieList(dataMovies.results));
        dispatch(setFilterData([]));
        dispatch(setQuantity(dataMovies.total_results));
        setFilterPagesCount(400);
      };

      fetchMovies();
    } catch (error) {
      console.log(`Error with the server: ${error}`);
    }
  }, [selectedGenre, currentPage, searchField]);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    const selectedPage = pageNumber.selected + 1;

    setCurrentPage(selectedPage);

    window.scrollTo({
      top: 0,
      /*  behavior: "smooth" */
    });
  };

  useEffect(() => {
    try {
      const fetchMovies = async () => {
        if (searchField.length > 0) {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchField}&with_genres=${selectedGenre}&page=${currentPage}`
          );

          if (!response.ok) throw Error("Error with the API data server");

          const data = await response.json();

          dispatch(setFilterData(data.results));

          // Calcular el número total de páginas
          const totalResults = data.total_results;
          const resultsPerPage = data.results.length;
          const totalPages = Math.ceil(totalResults / resultsPerPage);

          setFilterPagesCount(totalPages);
          dispatch(setQuantity(data.total_results));
        }
      };

      fetchMovies();
    } catch (error) {
      console.log(`Error with the server: ${error}`);
    }
  }, [searchField, currentPage]);

  return (
    <div>
      <MoviesTitle>
        <span>Sanflix</span>
        <h1>Movies</h1>
      </MoviesTitle>
      <Container>
        <SelectContainer>
          <InputSearchComponent type={"Movies"} />
          <SelectorComponent
            selectedGenre={selectedGenre}
            handleGenreChange={handleGenreChange}
            type={movies}
          />
        </SelectContainer>

        <Quantity>{`${quantity} items`}</Quantity>
      </Container>

      <AllContainer>
        <MediaFilter
          currentData={filterData.length > 0 ? filterData : movies}
        />
      </AllContainer>

      <PaginationContainer
        previousLabel={"< Previous"}
        nextLabel={" Next >"}
        pageCount={filterPagesCount}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        activeClassName={"active"}
        pageClassName={"pagination-page"}
        previousClassName={"pagination-page"}
        nextClassName={"pagination-page"}
        breakClassName={"pagination-page"}
      />
    </div>
  );
};
export default MoviesList;
