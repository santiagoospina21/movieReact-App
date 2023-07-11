import styled from "styled-components";

import ReactPaginate from "react-paginate";

import { Title } from "../home/home.styles";

export const MoviesTitle = styled(Title)`
  span {
    color: var(--primary-200, #beb7fb);
    /* Body/Extra Small */
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }

  h1 {
    margin-top: 0px;
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
`;

export const SelectContainer = styled.div`
  display: flex;
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
