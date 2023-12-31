import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;

  justify-content: space-between;
  margin-bottom: 25px;

  background: rgba(18, 24, 41, 0.8);
  backdrop-filter: blur(20px);
`;

export const LogoContainer = styled(Link)`
  display: flex;
  padding: 20px 0 20px 7%;
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
    padding-left: 120px;
  }

  @media screen and (max-width: 970px) {
    display: none;
    padding: 20px 0 20px 0px;
  }
`;

export const NavLinks = styled.div`
  width: 674px;
  height: 48px;
  display: flex;
  gap: 16px;
  margin: 16px 50px 16px 0px;

  @media screen and (max-width: 767px) {
    align-items: center;
    justify-content: center;
    margin: 16px 3% 0px 3%;
    gap: 10px;
    width: 100%;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    align-items: flex-end;
    justify-content: flex-end;
    margin: 16px 3% 0px 3%;
    gap: 10px;
    width: 100%;
  }
`;

export const NavLink = styled(Link)`
  color: #a8aebf;
  font-size: 16px;
  font-weight: 600;
  padding: 10px 15px;
  letter-spacing: 0.02em;
  text-decoration: none;
  text-align: center;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    font-size: ${({ currentUser }) => (currentUser ? "11px" : "12px")};
    padding: 10px 6px;
    text-align: center;
  }
`;

export const Avatar = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid #eeb4f5c5;
  border-radius: 100%;
  background-color: #eeb4f5c5;
  img {
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;
