import styled, { css } from "styled-components";

export const Title = styled.div`
  color: white;
  margin-top: 40px;
  margin-left: 120px;

  h1 {
    font-weight: 600;
    font-size: 4rem;
    line-height: 80px;
    color: #ebeef5;
  }
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #8e95a9;
  }
  @media screen and (max-width: 767px) {
    margin-left: 10%;
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 14px;
    }
  }
`;

//Card

export const AllContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5rem;
  width: 90%;
  margin-left: 6.5%;
  margin-top: 3rem;

  @media screen and (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    margin-left: 10%;
    column-gap: 6rem;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 5%;
    margin-right: 5%;
    justify-items: center; /* Centrar horizontalmente */
    align-items: center; /* Centrar verticalmente */
  }
`;
