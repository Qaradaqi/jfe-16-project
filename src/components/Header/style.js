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
@media only screen and (max-width: 1147px) {
  .navigation {
    padding-left: 12px;
    .btn {
      margin: 0;
    }
  }
  .action {
    .btn {
      margin: 0;
    }
  }
}
@media only screen and (max-width: 740px) {
  display: none;
}
`;