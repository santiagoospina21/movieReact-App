import { useNavigate } from "react-router-dom";

import {
  ContainerIntro,
  ContainerTitle,
  Overlay,
  ContainerLogo,
  Sanflix,
  ButtonLogIn,
  ButtonExplore,
  ContainerButtons,
} from "./intro.styles";

import Logo from "../../../img/logo.png";
const Intro = () => {
  const navigate = useNavigate();

  const navigateHomeHandler = () => {
    navigate("/home");
  };

  const navigateLogInHandler = () => {
    navigate("/sign-in");
  };

  return (
    <ContainerIntro>
      <Overlay />
      <ContainerTitle>
        <ContainerLogo>
          <img src={Logo}></img>
          <Sanflix>Sanflix</Sanflix>
        </ContainerLogo>
        <h1>Movie Listing Web App</h1>
      </ContainerTitle>
      <ContainerButtons>
        <ButtonExplore onClick={navigateHomeHandler}>Explore</ButtonExplore>
        <ButtonLogIn onClick={navigateLogInHandler}>Log In</ButtonLogIn>
      </ContainerButtons>
    </ContainerIntro>
  );
};

export default Intro;
