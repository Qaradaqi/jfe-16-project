import styled from "styled-components";
import { pallete } from "../../../theme";

export const Style = styled.div`
display: none;
position: fixed;
width: 100%;
top: 0;
left: 0;
z-index: 10;
padding: 8px 16px;
background: ${pallete.headerBackground};
backdrop-filter: blur(20px);
min-height: 56px;
.left-side {
  .menu-btn {
    width: 24px;
    padding: 0 4px;
    .top, .middle, .bottom {
      width: 100%;
      height: 1px;
      background: ${pallete.boneColor};
      opacity: 0.5;
      }
    }
  }
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
}
.right-side {
  .search, .login {
    color: ${pallete.boneColor};
    opacity: 0.5;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 5px;
    margin: 2px 10px;
  }
}
@media only screen and (max-width: 740px) {
  display: block;
}
`;