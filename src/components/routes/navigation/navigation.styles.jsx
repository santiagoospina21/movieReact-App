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
  padding: 20px 0 20px 120px;
  width: 40px;
  height: 40px;
  img {
    width: 100%;
    height: 100%;
    padding-left: 120px;
  }
`;

export const NavLinks = styled.div`
  width: 624px;
  height: 48px;
  display: flex;
  gap: 16px;
  margin: 16px 120px 16px 0px;
`;

export const NavLink = styled(Link)`
  color: #a8aebf;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  padding: 10px 15px;
  letter-spacing: 0.02em;
  text-decoration: none;
  cursor: pointer;
`;
