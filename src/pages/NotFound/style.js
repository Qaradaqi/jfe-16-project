import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
.content {
  margin: 200px 0 170px;
  width: 100%;
  height: 100%;
  .title {
    font-size: 3.2rem;
    color: ${pallete.whiteColor};
    font-weight: 700;
    line-height: 1.5;
    .title-icon {
      color: #f33;
      font-size: 2.4rem;
      margin-right: 16px;
    }
  }
  .body {
    color: ${pallete.whiteColor};
    font-size: 1.6rem;
    font-weight: 400;
    margin: -9px 0 40px;
  }
  .desc {
    font-size: 1.4rem;
    padding: 16px;
    background-color: ${pallete.heroTypeBG};
    border-radius: ${pallete.defaultRadius};
  }
  .btn {
    margin-top: 28px;
    width: 200px;
  }
}
`;