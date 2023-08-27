import styled from "styled-components";

import ReactPaginate from "react-paginate";

import { Title } from "../home/home.styles";

export const MoviesTitle = styled(Title)`
  span {
    color: var(--primary-200, #beb7fb);

    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }

  h1 {
    margin-top: 0px;
  }

  @media screen and (max-width: 767px) {
    span {
      margin-left: 5%;
    }
    h1 {
      margin-left: 5%;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Quantity = styled.span`
  color: var(--grey-400, #767e94);
  padding-left: 130px;
  padding-top: 40px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;

  @media screen and (max-width: 767px) {
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
  }
`;

export const SelectContainer = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media screen and (max-width: 1024px) {
    padding-left: 4%;
  }
`;

//Pagination

export const PaginationContainer = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  gap: 20px;
  color: white;
  list-style: none;

  @media screen and (max-width: 767px) {
    font-size: 12px;
  }

  .active {
    padding: 8px 15px;
    background-color: #2e3c62;
    font-weight: bold;
    border-radius: 3px;
  }

  .pagination-page {
    margin: 0 5px;
    cursor: pointer;
  }
`;
