import styled, { css } from "styled-components";

import SearchIcon from "../../../img/search-normal.png";

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
`;

export const InputSearch = styled.div`
  margin-top: 40px;
  margin-left: 120px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  padding: 12px 16px;
  width: 344px;
  height: 64px;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid #323b54;
  border-radius: 12px;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-position: 20px center;
  padding-left: 65px; /* Ajusta este valor según el tamaño del ícono */
  color: white;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;

  padding: 8px;
  margin-top: 20px;
  margin-left: 120px;
  width: 368px;
  height: 56px;

  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 12px;
`;
export const ButtonAll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 32px;

  border-radius: 8px;
  width: 85px;
  height: 40px;

  font-family: "Poppins";
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: #ebe9fe;
  cursor: pointer;

  ${(props) =>
    props.active &&
    css`
      background: #7b6ef6;
    `}
`;

export const ButtonMovies = styled(ButtonAll)`
  width: 123px;
`;

export const ButtonTV = styled(ButtonAll)`
  width: 144px;
`;

//Card

export const AllContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5rem;
  width: 90%;
  margin-left: 6.5%;
  margin-top: 3rem;
`;
