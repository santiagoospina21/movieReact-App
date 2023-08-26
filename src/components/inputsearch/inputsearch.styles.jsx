import styled from "styled-components";

import SearchIcon from "../../img/search-normal.png";

export const InputSearch = styled.div`
  margin-top: 40px;
  margin-left: 6.5%;

  @media screen and (max-width: 767px) {
    margin-left: 10%;
    margin-right: 10%;
  }
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

  @media screen and (max-width: 767px) {
    width: 95%;
  }
`;
