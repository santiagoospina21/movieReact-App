import logo from "../../../img/logo.png";
import { Outlet } from "react-router-dom";

import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./navigation.styles";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <img src={logo} alt="logo"></img>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/movies">Movies</NavLink>
          <NavLink>TV Shows</NavLink>
          <NavLink>Favorites</NavLink>
          <NavLink>Sign In</NavLink>
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
