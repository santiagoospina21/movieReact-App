import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import {
  selectDetailsData,
  selectMedia,
} from "../../../store/movies/movies.selector";

import { setDetailsData } from "../../../store/movies/movies.reducer";

import TvShowsDetails from "../details-tvshows/details-tvshows.component";
import MoviesDetails from "../details-movies/details-movies.component";

const DetailsMovies = () => {
  const { id } = useParams();
  const apiKey = "e1b22a6d327c893e2f41c1bc5b31242d";

  const media = useSelector(selectMedia);
  const detailsData = useSelector(selectDetailsData);

  const dispatch = useDispatch();

  useEffect(() => {
    try {
      const fetchDataDetail = async () => {
        const details = await fetch(
          `https://api.themoviedb.org/3/${media}/${id}?api_key=${apiKey}`
        );

        if (!details.ok)
          throw new Error("Error with the response API of movies");

        const detailsDataFetch = await details.json();

        dispatch(setDetailsData(detailsDataFetch));
      };

      fetchDataDetail();
    } catch (error) {
      console.error("Error al realizar la consulta a la API de TMDb:", error);
    }
  }, [id, media]);

  return (
    <div>
      {media !== "movie" ? (
        <TvShowsDetails tvshow={detailsData} />
      ) : (
        <MoviesDetails movies={detailsData} />
      )}
    </div>
  );
};

export default DetailsMovies;
