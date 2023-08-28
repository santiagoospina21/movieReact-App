import styled from "styled-components";

import Email from "../../../img/email-icon.svg";
import Password from "../../../img/password-icon.svg";

export const ContainerSignin = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;

  width: 100%;

  @media screen and (max-width: 926px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerImageSignin = styled.div`
  width: 486px;
  height: 584px;
  margin-top: 120px;

  @media screen and (max-width: 1440px) {
    margin-top: 60px;
  }

  @media screen and (max-width: 1330px) {
    width: 0px;
    height: 0px;
    img {
      display: none;
    }
  }

  @media screen and (max-width: 767px) {
    margin-top: 0px;
  }
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: 126px;
  margin-top: 10%;

  span {
    color: var(--grey-100, #c3c8d4);
    font-size: 64px;
    font-weight: 600;
    line-height: 80px;
    letter-spacing: -1.28px;
    padding-bottom: 40px;
  }

  @media screen and (max-width: 1440px) {
    margin-left: 70px;
    margin-right: 70px;
  }

  @media screen and (max-width: 926px) {
    margin-top: 5%;
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
    span {
      font-size: 40px;
      margin-left: 10%;
    }
  }
`;

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  position: relative;

  input {
    width: 100%;
    padding: 16px 16px;
    border-radius: 12px;
    border: 1px solid var(--grey-700, #323b54);
    background: var(--black-10, rgba(0, 0, 0, 0.1));
    color: var(--white-100, #fff);

    background-image: url(${Password});
    background-repeat: no-repeat;
    background-position: left center;
    background-position-x: 16px;
    text-indent: 36px;
  }

  input[type="email"] {
    background-image: url(${Email});
    background-position: left 16px center;
  }

  @media screen and (max-width: 926px) {
    margin-left: 10%;
    margin-right: 30%;
  }
`;

export const ButtonViewOn = styled.button`
  position: absolute;
  top: 40%;
  right: -24px;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;

  @media screen and (max-width: 767px) {
    transform: translateY(-60%);
  }
`;

export const ButtonLogin = styled.button`
  width: 161px;
  padding: 16px 32px;
  margin-top: 40px;
  border-radius: 12px;
  border: 2px solid var(--primary-400, #7b6ef6);
  background: var(--primary-400, #7b6ef6);

  color: var(--white-100, #fff);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  width: 334px;
  gap: 20px;

  @media screen and (max-width: 767px) {
    width: 250px;
    margin-bottom: 1rem;
  }
`;

export const FormSignUp = styled(FormLogin)`
  input {
    background-image: none;
    text-indent: 0px;
  }
  input[type="email"] {
    background-image: none;
  }
`;

export const ButtonSignUp = styled(ButtonLogin)`
  background: var(--primary-400, #2689d9);
  border: 2px solid var(--primary-400, #2689d9);

  width: 334px;

  @media screen and (max-width: 767px) {
    width: 250px;
    margin-bottom: 2rem;
  }
`;

export const ButtonGoogle = styled(ButtonLogin)`
  background: var(--primary-400, #3a51d5);
  border: 2px solid var(--primary-400, #3a51d5);
`;

/* #2689d9

#3a51d5 */
