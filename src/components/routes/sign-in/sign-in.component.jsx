import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";

import SignUp from "../../sign-up/sign-up.component";
import Spinner from "../../spinner/spinner.component";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../../utils/firebase/firebase.utils";

import Men from "../../../img/men-sign-in.svg";
import ViewOnIcon from "../../../img/viewOn.svg";
import ViewOffIcon from "../../../img/viewOff.svg";

import { setIsLoading } from "../../../store/user/user.reducer";
import { selectIsLoading } from "../../../store/user/user.selector";

import {
  ContainerImageSignin,
  ContainerSignin,
  ContainerLogin,
  FormLogin,
  ButtonLogin,
  ButtonViewOn,
  ButtonsContainer,
  ButtonGoogle,
} from "./sign.styles";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [type, setType] = useState("password");
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const isLoading = useSelector(selectIsLoading);

  const onHandleType = () => {
    if (type === "password") setType("text");
    else setType("password");
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
    dispatch(setIsLoading(false));
  };

  const logGoogleUser = async () => {
    try {
      const response = await signInWithGooglePopup();

      if (response) {
        navigate("/home");
      }
    } catch (error) {
      console.log("Error with the Google Account");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(setIsLoading(true));
    console.log(isLoading);
    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      resetFormFields();

      if (response) {
        navigate("/home");
      }
    } catch (error) {
      alert("Error with the email or password");
      console.log("User sign in failed", error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <ContainerSignin>
      <ContainerImageSignin>
        <img src={Men} alt="image sign-in" />
      </ContainerImageSignin>

      <ContainerLogin>
        {isLoading ? (
          <Spinner />
        ) : (
          <Fragment>
            <span>Login</span>
            <FormLogin onSubmit={handleSubmit}>
              <input
                placeholder="Email"
                type="email"
                name="email"
                required
                onChange={handleChange}
                value={email}
              ></input>
              <input
                placeholder="Password"
                type={type}
                name="password"
                required
                onChange={handleChange}
                value={password}
              ></input>

              <ButtonViewOn type="button" onClick={onHandleType}>
                <img
                  src={type === "password" ? ViewOffIcon : ViewOnIcon}
                  alt="ViewOn Icon"
                />
              </ButtonViewOn>

              <ButtonsContainer>
                <ButtonLogin type="submit">Login</ButtonLogin>
                <ButtonGoogle type="button" onClick={logGoogleUser}>
                  Google
                </ButtonGoogle>
              </ButtonsContainer>
            </FormLogin>
          </Fragment>
        )}
      </ContainerLogin>

      <SignUp />
    </ContainerSignin>
  );
};

export default SignIn;
