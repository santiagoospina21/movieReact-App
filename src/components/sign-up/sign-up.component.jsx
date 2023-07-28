import { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { setIsLoading } from "../../store/user/user.reducer";

import Spinner from "../../components/spinner/spinner.component";

import {
  createAuthWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import {
  ContainerLogin,
  FormSignUp,
  ButtonSignUp,
} from "../routes/sign-in/sign.styles";
import { selectIsLoading } from "../../store/user/user.selector";

const defaultFormFields = {
  email: "",
  password: "",
  displayName: "",
  confirmPassword: "",
};

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password, displayName, confirmPassword } = formFields;
  const isLoading = useSelector(selectIsLoading);

  /*   dispatch(setIsLoading(false)); */

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(setIsLoading(true));

    if (password !== confirmPassword) {
      alert("Password do not match");
      dispatch(setIsLoading(false));
      return;
    }

    try {
      const { user } = await createAuthWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();

      if (user) {
        navigate("/home");
        dispatch(setIsLoading(false));
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <ContainerLogin>
      {isLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <span>Sign Up</span>
          <FormSignUp onSubmit={handleSubmit}>
            <input
              placeholder="Display Name"
              type="text"
              name="displayName"
              required
              onChange={handleChange}
              value={displayName}
            ></input>
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
              type="password"
              name="password"
              required
              onChange={handleChange}
              value={password}
            ></input>
            <input
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              required
              onChange={handleChange}
              value={confirmPassword}
            ></input>
            <ButtonSignUp type="submit">Sign Up</ButtonSignUp>
          </FormSignUp>
        </Fragment>
      )}
    </ContainerLogin>
  );
};

export default SignUp;
