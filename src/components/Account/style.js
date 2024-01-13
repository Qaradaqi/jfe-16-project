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
        margin-left: 10px;
        .icon {
          color: ${pallete.primaryColor};
          font-size: 1.4rem;
        }
      }
    }
  }
  .right-box {
    width: 185px;
    margin-left: 20px;
  }
}
@media only screen and (max-width: 1366px) {
  padding: 0 48px;
}
@media only screen and (max-width: 1024px) {
  padding: 0 40px;
  .account-box-content {
    padding: 16px 20px 0;
  }
}
@media only screen and (min-width: 835px) and (max-width: 998px) {
  .account-box-content {
    flex-direction: column;
    .left-box {
      padding: 0 20px 20px;
      .title {
        font-size: 1.8rem;
        line-height: 1.1;
      }
      .items {
        .item {
          font-size: 1.6rem;
          color: ${pallete.whiteColor};
          font-weight: 400;
          line-height: 1.5;
          margin-left: 10px;
          .icon {
            color: ${pallete.primaryColor};
            font-size: 1.4rem;
          }
        }
      }
    }
    .right-box {
      padding: 20px;
      width: 300px;
    }
  }
}
@media only screen and (max-width: 834px) {
  padding: 0 32px;
}
@media only screen and (max-width: 740px) {
  padding: 0 16px;
  .account-box-content {
    flex-direction: column;
    .left-box {
      padding: 0 5px 20px;
      .title {
        font-size: 1.8rem;
        line-height: 1.1;
      }
      .items {
        .item {
          font-size: 1.6rem;
          color: ${pallete.whiteColor};
          font-weight: 400;
          line-height: 1.5;
          margin-left: 10px;
          .icon {
            color: ${pallete.primaryColor};
            font-size: 1.6rem;
            margin: 7px 12px 0 0; 
          }
        }
      }
    }
    .right-box {
      padding: 20px;
      width: 300px;
      margin-left: 0;
    }
  }
}
`;