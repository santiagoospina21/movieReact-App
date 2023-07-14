import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import InputSearchComponent from "../../inputsearch/inputsearch.component";
import SelectorComponent from "../../selector/selector.component";
import MediaFilter from "../../mediaFilter/mediaFilter.component";
import Modal from "../../modal/modal.component";

import {
  selectFilterData,
  selectTvShowList,
  selectSearchField,
  selectQuantity,
} from "../../../store/movies/movies.selector";
import {
  setTvShowsList,
  setFilterData,
  setQuantity,
} from "../../../store/movies/movies.reducer";

import {
  MoviesTitle,
  Container,
  SelectContainer,
  Quantity,
} from "../moviesList/moviesList.styles";

import { AllContainer } from "../home/home.styles";

import { PaginationContainer } from "../moviesList/moviesList.styles";

const TvShowList = () => {
  const dispatch = useDispatch();

  const apiKey = "e1b22a6d327c893e2f41c1bc5b31242d";
  const genreId = 10759;

  const [selectedGenre, setSelectedGenre] = useState(genreId);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterPagesCount, setFilterPagesCount] = useState(400);

  const tvShows = useSelector(selectTvShowList);
  const filterData = useSelector(selectFilterData);
  const searchField = useSelector(selectSearchField);
  const quantity = useSelector(selectQuantity);

  useEffect(() => {
    const fetchTvShows = async () => {
      const tvShowsResponse = await fetch(
        `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${selectedGenre}&page=${currentPage}`
      );

      const data = await tvShowsResponse.json();

      dispatch(setTvShowsList(data.results));
      dispatch(setFilterData([]));
      dispatch(setQuantity(data.total_results));
      setFilterPagesCount(400);
    };
    fetchTvShows();
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
    const fetchTvShows = async () => {
      if (searchField.length > 0) {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${searchField}&with_genres=${selectedGenre}&page=${currentPage}`
        );

        const data = await response.json();

        dispatch(setFilterData(data.results));

        const totalResults = data.total_results;
        const resultsPerPage = data.results.length;
        const totalPages = Math.ceil(totalResults / resultsPerPage);

        setFilterPagesCount(totalPages);
        dispatch(setQuantity(data.total_results));
      }
    };
    fetchTvShows();
  }, [searchField, currentPage]);

  return (
    <div>
      <MoviesTitle>
        <span>Sanflix</span>
        <h1>Tv Shows</h1>
      </MoviesTitle>

      <Container>
        <SelectContainer>
          <InputSearchComponent type="Tv Shows" />
          <SelectorComponent
            selectedGenre={selectedGenre}
            handleGenreChange={handleGenreChange}
            type={tvShows}
          />
        </SelectContainer>

        <Quantity>{`${quantity} items`}</Quantity>
      </Container>

      <Modal />

      <AllContainer>
        <MediaFilter
          currentData={filterData.length > 0 ? filterData : tvShows}
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

export default TvShowList;
