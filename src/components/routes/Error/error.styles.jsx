import styled from "styled-components";

export const ContainerError = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  margin-top: 100px;

  img {
    height: 520px;
  }

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
`;
