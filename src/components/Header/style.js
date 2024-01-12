import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
position: fixed;
width: 100%;
top: 0;
left: 0;
z-index: 10;
padding: 16px;
background: ${pallete.headerBackground};
backdrop-filter: blur(20px);
.logo {
  width: 130px;
  height: 32px;
  a {
    .img {
      width: 106px;
      height: 18px;
      transition: all 0.07s ease;
      &:hover {
        width: 116px;
        height: 20px;
      }
    }
  }
}
.navigation {
  padding-left: 56px;
}
`;