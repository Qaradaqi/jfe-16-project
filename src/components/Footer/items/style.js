import styled from "styled-components";
import { pallete } from '../../../theme';
export const Style = styled.div`
.col-title {
  color: ${pallete.boneColor};
  font-size: 1.6rem;
  line-height: 2;
  font-weight: 700;
  margin-left: 7px;
}
.col-items {
  .col-item {
    a {
      font-weight: 400;
      font-size: 1.6rem;
      opacity: 0.7;
      color: ${pallete.whiteColor};
      white-space: nowrap;
      padding: 8px;
      width: 100%;
      &:hover {
        border-radius: ${pallete.defaultRadius};
        opacity: 1;
        background: ${pallete.headerBackground};
        box-shadow: 0 0 0 2px ${pallete.darkBorder};
        backdrop-filter: blur(8px);
      }
    }
}
  }
}
`;