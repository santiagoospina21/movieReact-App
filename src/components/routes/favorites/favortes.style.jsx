import styled from "styled-components";

export const ContainerEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h1 {
    color: var(--grey-50, #ebeef5);
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.96px;
  }

  span {
    color: var(--grey-300, #8e95a9);
    font-size: 16px;
    font-style: normal;

    line-height: 24px;
  }

  @media screen and (max-width: 767px) {
    img {
      width: 70%;
    }

    h1 {
      font-size: 28px;
      text-align: center;
      margin-left: 5%;
      margin-right: 5%;
    }

    span {
      text-align: center;
      font-size: 14px;
      margin-left: 5%;
      margin-right: 5%;
      margin-bottom: 5%;
    }
  }
`;
