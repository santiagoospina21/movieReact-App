import logo from "../../../img/logo.png";
import { Outlet } from "react-router-dom";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import {
  setFilterData,
  setSearchField,
} from "../../../store/movies/movies.reducer";

const Navigation = () => {
  const dispatch = useDispatch();

  const resetFilterData = () => {
    dispatch(setSearchField(""));
    dispatch(setFilterData([]));
  };

  return (
    <Fragment>
      <NavigationContainer onClick={resetFilterData}>
        <LogoContainer to="/">
          <img src={logo} alt="logo"></img>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/tvshows">TV Shows</NavLink>
          <NavLink>Favorites</NavLink>
          <NavLink>Sign In</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
