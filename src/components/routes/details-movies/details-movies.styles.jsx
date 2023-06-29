import styled from "styled-components";

import { Vote } from "../../card/card.styles";

export const Backdrop = styled.div`
  position: relative;
  margin-top: 50px;
  width: 840px;
  height: 336px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 40px;

  background: linear-gradient(
    180deg,
    rgba(54, 44, 146, 0.4) 0%,
    rgba(18, 98, 151, 0.4) 100%
  );

  img {
    width: 100%;
    object-fit: contain;
    opacity: 0.8;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  left: 33%;
  top: 40%;

  width: 350px;
  height: 64px;
  padding: 40px;

  border-radius: 24px;
  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(12px);

  span {
    color: var(--primary-200, #beb7fb);

    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
`;

export const Title = styled.h1`
  color: var(--grey-50, #ebeef5);

  font-size: 1.2rem;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -0.64px;
`;

export const Container = styled.div`
  display: flex;
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 160px;
  margin-bottom: 5%;

  img {
    width: 100%;
    height: auto;
    max-width: 480px; /* Cambio realizado aquí */
    max-height: 100%;
    border-radius: 24px;
  }
`;

export const ContainerInfo = styled.div`
  display: flex; /* Cambiado a flex */
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  width: 480px;
  margin-left: 10%;
  gap: 24px;

  span {
    color: var(--grey-400, #767e94);
    font-size: 16px;
  }
`;

export const Overview = styled.div`
  color: var(--grey-300, #8e95a9);
  font-size: 1.1rem;
  font-family: Poppins;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 1rem;
`;

export const VoteDetails = styled(Vote)`
  position: static;
`;

export const Prueba = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Type = styled.div`
  color: var(--grey-100, #c3c8d4);
  font-size: 1.1rem;
`;
