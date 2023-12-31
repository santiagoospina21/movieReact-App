import styled, { css } from "styled-components";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;

  padding: 8px;
  margin-top: 20px;
  margin-left: 6.5%;
  width: 368px;
  height: 56px;

  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 12px;

  @media screen and (max-width: 767px) {
    margin-left: 10%;
    width: 80%;
  }
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

  @media screen and (max-width: 767px) {
    font-size: 12px;
    padding: 8px 24px;
  }

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
