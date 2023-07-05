import styled from "styled-components";

import { Title } from "../home/home.styles";

export const MoviesTitle = styled(Title)`
  span {
    color: var(--primary-200, #beb7fb);
    /* Body/Extra Small */
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }

  h1 {
    margin-top: 0px;
  }
`;
