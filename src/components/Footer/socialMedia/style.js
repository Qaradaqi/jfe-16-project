import styled from "styled-components";
import { pallete } from "../../../theme";

export const Style = styled.ul`
width: 268px;
margin-top: 10px;
li {
  a {
    color: ${pallete.boneColor};
    i {
      font-size: 2.5rem;
      opacity: 0.7;
      &:hover {
        opacity: 1;
      }
    }
  }
}
`;