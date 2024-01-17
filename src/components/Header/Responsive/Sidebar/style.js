import styled from "styled-components";
import { pallete } from "../../../../theme";

export const Style = styled.div`
background: #000c;
width: 100vw;
min-height: 100vh;
position: fixed;
top: 0;
left: 0;
z-index: 11;
.sidebar-content {
  width: 316px;
  height: 100vh;
  background: linear-gradient(180deg,#0009,#0000),#141414;
  .sidebar-close {
    i {
      color: ${pallete.whiteColor};
      font-size: 2rem;
      min-height: 56px;
      padding: 22px;
    }
  }
  .sidebar-items {
    .item {
      box-shadow: inset 0 1px 0 #eaf6ff26;
      padding: 16px;
      width: 100%;
      height: 72px;
      color: ${pallete.boneColor};
      &.logo {
        a {
          .img {
            width: 106px;
            height: 18px;
          }
        }
      }
      .btn-account {
        flex: 1;
        div.sc-dlfmHC.jzZSoF {
          flex: 1;
          .btn-content {
            flex: 1;
          }
        }
      }
    }
  }
}
`;