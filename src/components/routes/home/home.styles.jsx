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
