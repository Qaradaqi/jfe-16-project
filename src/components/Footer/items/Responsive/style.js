import styled from "styled-components";
import { pallete } from "../../../../theme";

export const Style = styled.div`
.col-title {
  color: ${pallete.boneColor};
  font-size: 1.6rem;
  line-height: 2;
  padding: 0 12px;
  width: 95%;
  background-color: ${pallete.footerBG};
}
.col-items {
  .col-item {
    margin-left: 14px;
    transition: all 70ms ease-in-out;
    a {
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.25;
      opacity: 0.7;
      color: ${pallete.whiteColor};
      white-space: nowrap;
      padding: 8px;
      width: 100%;
      }
    }
}
  }
}
`;