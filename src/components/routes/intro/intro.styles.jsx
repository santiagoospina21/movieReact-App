import styled from "styled-components";

import Wallpaper from "../../../img/wallpaper.jpg";

import { ButtonLogin } from "../sign-in/sign.styles";

export const ContainerIntro = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    135deg,
    #20283e 0%,
    rgba(32, 40, 62, 0.84) 45.62%,
    rgba(32, 40, 62, 0) 64.9%
  );
  background-image: url(${Wallpaper});
  background-size: cover;
  background-position: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`;

export const Overlay = styled.div`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(32, 40, 62, 0.84);
`;

export const ContainerLogo = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    align-self: center;
    padding-right: 25%;
  }
`;

export const Sanflix = styled.h2`
  color: var(--secondary-500, #3d9fdc);
  font-size: 80px;
  z-index: 1;
  padding-left: 2rem;
  font-size: 80px;

  font-weight: 700;
  line-height: 80px;
  letter-spacing: -1.6px;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);

  @media screen and (max-width: 1440px) {
    font-size: 70px;
  }

  @media screen and (max-width: 767px) {
    font-size: 60px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 30%;
  padding-left: 15%;
  padding-top: 15%;

  img {
    width: 160px;
    height: 160px;
    z-index: 1;
  }

  h1 {
    z-index: 1;
    color: var(--secondary-500, #5a4af4);
    font-family: Poppins;
    font-size: 80px;
    font-style: normal;
    font-weight: 600;
    line-height: 80px;
    letter-spacing: -1.6px;
    margin-top: 2rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 1.5);
  }

  @media screen and (max-width: 1440px) {
    width: 40%;
    h1 {
      font-size: 70px;
    }
    img {
      width: 100px;
      height: 100px;
    }
  }

  @media screen and (max-width: 767px) {
    width: 80%;
    padding-left: 10%;
    padding-top: 5%;
    h1 {
      font-size: 40px;
      text-align: center;
      align-self: center;
    }
    img {
      width: 50px;
      height: 50px;
      padding-left: 17%;
    }
  }
`;
export const ContainerButtons = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 3rem;

  @media screen and (max-width: 1440px) {
    width: 40%;
    margin-left: 2%;
  }

  @media screen and (max-width: 767px) {
    width: 80%;
    margin-left: 10%;
    gap: 0px;
  }
`;
export const ButtonExplore = styled(ButtonLogin)`
  background: var(--primary-400, #3a51d5);
  border: 2px solid var(--primary-400, #3a51d5);
  width: 300px;
  color: #ebeef5;
  font-size: 1.2rem;

  @media screen and (max-width: 767px) {
    width: 250px;
  }
`;

export const ButtonLogIn = styled(ButtonLogin)`
  background: var(--primary-400, #2689d9);
  border: 2px solid var(--primary-400, #2689d9);
  width: 300px;
  color: #ebeef5;
  font-size: 1.2rem;

  @media screen and (max-width: 767px) {
    width: 250px;
  }
`;

//#2689d9
//#3a51d5
