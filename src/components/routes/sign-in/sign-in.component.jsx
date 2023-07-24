import { useState } from "react";

import Men from "../../../img/men-sign-in.svg";
import ViewOnIcon from "../../../img/viewOn.svg";
import ViewOffIcon from "../../../img/viewOff.svg";

import {
  ContainerImageSignin,
  ContainerSignin,
  ContainerLogin,
  FormLogin,
  ButtonLogin,
  ButtonSignUp,
  ButtonViewOn,
  ButtonsContainer,
  ButtonGoogle,
  FormSignUp,
} from "./sign.styles";

const SignIn = () => {
  const [type, setType] = useState("password");

  const onHandleType = () => {
    if (type === "password") setType("text");
    else setType("password");
  };

  return (
    <ContainerSignin>
      <ContainerImageSignin>
        <img src={Men} alt="image sign-in" />
      </ContainerImageSignin>

      <ContainerLogin>
        <span>Login</span>
        <FormLogin>
          <input placeholder="Email" type="email"></input>
          <input placeholder="Password" type={type}></input>

          <ButtonViewOn type="button" onClick={onHandleType}>
            <img
              src={type === "password" ? ViewOffIcon : ViewOnIcon}
              alt="ViewOn Icon"
            />
          </ButtonViewOn>

          <ButtonsContainer>
            <ButtonLogin type="submit">Login</ButtonLogin>
            <ButtonGoogle type="submit">Google </ButtonGoogle>
          </ButtonsContainer>
        </FormLogin>
      </ContainerLogin>

      <ContainerLogin>
        <span>Sign Up</span>
        <FormSignUp>
          <input placeholder="Display Name" type="text"></input>
          <input placeholder="Email" type="email"></input>
          <input placeholder="Password" type="password"></input>
          <input placeholder="Confirm Password" type="password"></input>
          <ButtonSignUp type="submit">Sign Up</ButtonSignUp>
        </FormSignUp>
      </ContainerLogin>
    </ContainerSignin>
  );
};

export default SignIn;
