import styled, { css } from "styled-components";

import Close from "../../img/vuesax-linear-close-square.svg";
import Like from "../../img/like.svg";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Color de fondo oscuro */
  display: ${({ openModal }) => (openModal ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 12px;
  border-radius: 24px;
  border: 1px solid var(--grey-800, #20283e);
  width: 560px;
  height: 432px;
  background: rgba(18, 24, 41, 0.8);
  backdrop-filter: blur(20px);
`;

export const ContainerSymbol = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;
  width: 24px;
  height: 24px;

  border-radius: 8px;
  background: var(--black-30, rgba(0, 0, 0, 0.3));
  backdrop-filter: blur(12px);

  margin-left: 470px;
  margin-top: 32px;

  z-index: 1;
  cursor: pointer;
`;

export const CloseSymbol = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${Close});
  background-repeat: no-repeat;
`;

export const LikeImg = styled.div`
  width: 120px;
  height: 120px;
  background-image: url(${Like});
  background-repeat: no-repeat;
`;

export const TitleModal = styled.h1`
  color: var(--grey-50, #ebeef5);

  font-size: 24px;
  line-height: 32px;
  letter-spacing: -0.36px;
`;

export const SpanModal = styled.span`
  align-self: stretch;
  color: var(--grey-400, #767e94);
  text-align: center;

  font-size: 16px;
  line-height: 24px;
`;

export const ButtonModal = styled.button`
  padding: 16px 32px;
  margin-top: 0.5rem;

  border-radius: 12px;
  border: 2px solid var(--primary-400, #7b6ef6);
  background: var(--primary-400, #7b6ef6);

  color: var(--white-100, #fff);
  font-family: Poppins;
  font-size: 14px;

  line-height: 24px;

  cursor: pointer;
`;
