import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";

import logo from "../../../img/logo.png";
import { Outlet } from "react-router-dom";

import {
  setFilterData,
  setSearchField,
} from "../../../store/movies/movies.reducer";

import { selectCurrentUser } from "../../../store/user/user.selector";

import { signOutUser } from "../../../utils/firebase/firebase.utils";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";

const Navigation = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector(selectCurrentUser);

  const resetFilterData = () => {
    dispatch(setSearchField(""));
    dispatch(setFilterData([]));
  };

  useEffect(() => {
    console.log("Usuario actual actualizado:", currentUser);
  }, [currentUser]);

  return (
    <Fragment>
      <NavigationContainer onClick={resetFilterData}>
        <LogoContainer to="/">
          <img src={logo} alt="logo"></img>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink to="/tvshows">TV Shows</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          {currentUser ? (
            <Fragment>
              <NavLink as="span" onClick={signOutUser}>
                Sign Out
              </NavLink>
              <NavLink>
                {currentUser.displayName &&
                  currentUser.displayName.split(" ")[0]}
              </NavLink>
            </Fragment>
          ) : (
            <NavLink to="/sign-in">Sign In</NavLink>
          )}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
