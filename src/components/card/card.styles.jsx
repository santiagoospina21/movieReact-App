import styled, { css } from "styled-components";

import Star from "../../img/star.svg";
import Likebw from "../../img/Like_bw.svg";
import Like from "../../img/like.svg";

import { Link } from "react-router-dom";

//Card

export const CardContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 8px;
  margin-bottom: 3rem;

  width: 282px;
  height: 500px;

  background: rgba(32, 40, 62, 0.8);
  backdrop-filter: blur(40px);

  border-radius: 12px;
  text-decoration: none;
  cursor: pointer;
`;

export const Footer = styled.div`
  padding: 8px;
  margin-left: 8px;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;

  letter-spacing: 0.02em;
  color: #ebeef5;
`;

export const Vote = styled.div`
  display: inline-flex;
  position: absolute;
  top: 18px;
  left: 16px;
  height: 40px;
  width: 40px;
  padding: 4px 0px 4px 2rem;

  align-items: center;

  border-radius: 8px;
  background: var(--black-65, rgba(0, 0, 0, 0.65));

  background-image: url(${Star});
  background-repeat: no-repeat;
  background-position: 0.5rem center;
  color: var(--warning-500, #ffad49);
`;

export const LikeFav = styled(Vote)`
  z-index: 999;
  left: 205px;
  background: none;
  background-repeat: no-repeat;

  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
  transition: opacity 0.1s ease-in-out;

  background-image: ${({ isLiked }) =>
    isLiked ? css`url(${Like})` : css`url(${Likebw})`};

  background-position: center;
  background-size: 2.5rem;
`;
