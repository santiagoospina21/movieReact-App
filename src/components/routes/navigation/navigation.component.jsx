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
  Avatar,
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
        <LogoContainer to="/home">
          <img src={logo} alt="logo"></img>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/movies" currentUser={currentUser}>
            Movies
          </NavLink>
          <NavLink to="/tvshows" currentUser={currentUser}>
            TV Shows
          </NavLink>
          <NavLink to="/favorites" currentUser={currentUser}>
            Favorites
          </NavLink>
          {currentUser ? (
            <Fragment>
              <NavLink
                as="span"
                onClick={signOutUser}
                currentUser={currentUser}
              >
                Sign Out
              </NavLink>

              <NavLink currentUser={currentUser}>
                {currentUser.displayName &&
                  currentUser.displayName.split(" ")[0]}
              </NavLink>
              <Avatar>
                <img
                  src={`https://robohash.org/${currentUser.uid}.png`}
                  alt="avatar_image"
                ></img>
              </Avatar>
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
