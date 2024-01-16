import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
  position: relative;
  min-height: 750px;
  margin-bottom: 20px;
  background: ${pallete.bodyBG}; 
  .background {
    background-image: ${(props) => (`url(${props.poster})`)};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(56.25vw - 1px);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    &:after {
      background: linear-gradient(90deg,#0d0d0de6,#0d0d0d00 53.51%),linear-gradient(180deg,#0d0d0d00,#0d0d0d);
      content: "";
      display: block;
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;
    }
  }
  .box {
    padding: 0 72px;
    .content {
      position: relative;
      z-index: 2;
      padding: 120px 0 25px 0;
      width: 100%;
      max-width: 700px;
      text-align: left;
      .play-btn {
        display: none;
        a {
          font-size: 6.4rem;
          color: ${pallete.primaryColor};
          border-radius: 50%;
          background: ${pallete.darkColor};
        }
      }
      .type-country-imdb {
        height: 24px;
        .type, .country, .imdb {
          text-transform: uppercase;
          background: ${pallete.bodyBG};
          color: ${pallete.whiteColor};
          border: 1px solid ${pallete.darkBorder};
          border-radius: 3px;
          padding: 5px;
          font-size: 1rem;
          font-weight: 700;
        }
      }
      .small-share {
        display: none;
        color: ${pallete.primaryColor};
        font-size: 1.8rem;
      }
      .title {
        font-size: 5.6rem;
        font-weight: 700;
        color: ${pallete.whiteColor};
        margin-bottom: 5px;
        padding-top: 16px;
        oveflow: hidden;
        text-overflow: ellipsis;
      }
      .year-runtime {
        font-size: 1rem;
        color: ${pallete.boneColor};
        font-weight: 400;
        white-space: nowrap;
      }
      .btn {
        margin-top: 16px;
      }
      .genres {
        font-size: 1.2rem;
        color: ${pallete.boneColor};
        font-weight: 400;
        white-space: nowrap;
        margin-top: 20px;
      }
      .director, .actors {
        font-size: 1.4rem;
        margin-top: 8px;
        padding: 8px 0;
        h3 {
          font-weight: 700;
          width: 100px;
          margin-right: 16px;
        }
        span {
          font-weight: 400;
        }
      }
      .plot {
        font-size: 1.4rem;
        font-weight: 400;
        color: ${pallete.whiteColor};
        margin-top: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.5;
      }
    }
    .share {
      position: relative;
      right: 48px;
      z-index: 2;
      min-height: 55px;
    }
  }
  @media only screen and (max-width: 1366px) {
    .box {
      padding: 0 48px;
    }
  }
  @media only screen and (max-width: 1024px) {
    .box {
      padding: 0 40px;
      .content {
        max-width: 546px;
        padding-top: 216px;
      }
    }
  }
  @media only screen and (max-width: 835px) {
    .box {
      padding: 0 32px;
      .content {
        padding-top: 240px;
      }
    }
  }
  @media only screen and (max-width: 740px) {
    .box {
      padding: 0 16px;
      .content {
        padding-bottom: 8px;
        margin-bottom: 0;
        .play-btn {
          display: flex;
          align-items: center;
          justify-content: start;
          margin-bottom: 25px;
        }
        .small-share {
          display: flex;
        }
        .title {
          font-size: 3.2rem;
          font-weight: 700;
          color: ${pallete.whiteColor};
          margin-bottom: 6px;
          oveflow: hidden;
          text-overflow: ellipsis;
        }
        .btn {
          padding-bottom: 16px;
          margin-bottom: 16px;
          border-bottom: 1px solid ${pallete.darkBorder};
          flex-wrap: wrap;
          div {
            width: 100%;
            order: 1;
            .btn-content { 
              border-color: ${pallete.primaryColor};
            }
          }
        }
        .genres {
          font-size: 1rem;
        }
        .director, .actors {
          font-size: 1rem;
        }
        .plot {
          font-size: 1.2rem;
        }
      }
      .share {
        display: none;
      }
    }
  }
`;