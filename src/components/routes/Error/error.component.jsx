import Fill from "../../../img/film-rolls.svg";

import { ContainerError } from "./error.styles";

const Error404 = () => {
  return (
    <ContainerError>
      <img src={Fill}></img>
      <h1>Lost your way?</h1>
      <span>
        Oops! This is awkward. You are looking for something that doesn't
        actually exist.
      </span>
    </ContainerError>
  );
};

export default Error404;
