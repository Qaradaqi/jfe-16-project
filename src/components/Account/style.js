import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
padding: 0 72px;
background-color: ${pallete.bodyBG};
.account-box-content {
  border-radius: 15px;
  border: 1px solid ${pallete.darkBorder};
  padding: 0 67px;
  width: 1384px;
  min-height: 246px;
  background-image: url('/asset/image/background.69985521.jpg');
  background-size: cover;
  .left-box {
    .title {
      font-size: 2.4rem;
      color: ${pallete.boneColor};
      line-height: 1.25;
    }
    .items {
      .item {
        font-size: 1.6rem;
        color: ${pallete.whiteColor};
        font-weight: 400;
        line-height: 1.5;
        .icon {
          color: ${pallete.primaryColor};
          font-size: 1.4rem;
        }
      }
    }
  }
  .right-box {
    width: 185px;
  }
}
`;