import { Route, Routes } from "react-router-dom";

import TvShowList from "../tvshowsList/tvshowsList.component";
const TvShows = () => {
  return (
    <div>
      <Routes>
        <Route index element={<TvShowList />} />
      </Routes>
    </div>
  );
};

export default TvShows;
