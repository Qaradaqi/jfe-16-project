import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
  padding: 75px 0;
  .arrow-icon {
    color: ${pallete.primaryColor};
    background: ${pallete.footerBG};
    font-size: 1.8rem;
    font-weight: 400;
    border-radius: 50%;
    margin: 16px;
    padding: 10px;
    width: 40px;
    height: 40px;
    border: 2px solid transparent;
    transition: all 70ms ease-in-out;
    &:hover {
      border: 2px solid ${pallete.darkBorder};
    }
  }
  .input-box {
    position: relative;
    margin: 32px 72px 42px auto;
    width: 100%;
    .input {      
      width: calc(100% - 72px);
      background: none;
      border: none;
      outline: none;
      color: ${pallete.whiteColor};
      padding: 1px 2px 1px 8px;
      font-size: 4.8rem;
      font-weight: 400;
      font-family: 'Sora', sans-serif;
    }
    .clear-btn-large {
      width: 55px;
      height: 32px;
      color: #f33!important;
      font-style: normal;
      font-weight: 600;
      font-size: 1.4rem;
      background: #0000;
      border: 1px solid ${pallete.darkBorder};
      backdrop-filter: blur(8px);
      border-radius: ${pallete.defaultRadius};
      cursor: pointer;
      transition: all 70ms ease-in-out;
      &:hover {
        border: 2px solid #f33!important;
      }
    }
    .clear-btn-small {
      display: none;
      color: ${pallete.primaryColor};
      font-size: 2rem;
      font-weight: 800;
    }
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      left: 0;
      height: 0;
      border: 1px solid ${pallete.searchBorder};
      bottom: -8px;
    }
  }
  .result-title {
    padding: 0 72px;
    margin-top: 31px;
    h3 {
      color: ${pallete.whiteColor};
      width: 100%;
      font-size: 2.4rem;
      font-weight: 700;
      padding-left: 8px;
      margin-bottom: 24px;
      border-bottom: 1px solid ${pallete.darkBorder};
    }
  }
  .no-result {
    margin-top: 55px;
    padding: 16px 72px;
    color: #f33;
    overflow: hidden;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.2;
  }
  .ant-empty {
    .ant-empty-image {
      height: 180px;
      img {
        width: auto;
        height: 180px;
        border-radius: ${pallete.defaultRadius};
        border: 2px solid ${pallete.primaryColor};
      }
    }
    .ant-empty-description {
      font-size: 1.6rem;
      font-weight: 700;
      padding: 20px;
      letter-spacing: 2px;
      color: ${pallete.whiteColor};
      font-family: 'sora';
    }
  }
  .result {
    padding: 0 72px;
    margin-top: 30px;
    .list {
      padding: 0 8px; 
      width: 24.5vw;
      .list-item {
        .item-link {
          font-weight: 400;
          font-size: 1.6rem;
          color: ${pallete.whiteColor};
          padding: 8px;
          width: 23.4375vw;
          margin-bottom: 8px;
          border: 1px solid ${pallete.darkBorder};
          border-radius: 12px;
          text-transform: capitalize;
          background: ${pallete.darkHoverBG};
          &:hover {
            border: 1px solid ${pallete.whiteColor};
            backdrop-filter: blur(8px);
          }
        }
      }
    }
    .items {
      margin: 0 auto;
      width: calc(100% - 16px);
      .item {
        flex-grow: 1;
        aspect-ratio: 2/3;
        width: calc(20% - 16px);
        padding: 8px;
        &:hover {
          z-index: 2;
        }
      }
    }
  }
  @media only screen and (max-width: 1366px) {
    .result-title {
      padding: 0 48px;
    }
    .no-result {
      padding: 16px 48px;
    }
    .result {
      padding: 0 48px;
    }
  }
  @media only screen and (max-width: 1024px) {
    .input-box {
      .clear-btn-large {
        display: none;
      }
      .clear-btn-small {
        display: flex;
      }
    }
    .result-title {
      padding: 0 40px;
    }
    .no-result {
      padding: 16px 40px;
    }
    .result {
      flex-direction: column;
      padding: 0 40px;
      .list {
        flex-direction: row;
        overflow-x: scroll;
        width: 100%;
        padding: 8px;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        &::-webkit-scrollbar {
          display: none;
        }
        .list-item {
          .item-link {
            white-space: nowrap;
            width: unset;
            margin-right: 8px;
            font-size: 1.2rem;
            font-weight: 400;
            border: 1px solid #0000;
          }
        }
      }
      .items {
        margin: 0;
        width: 100%;
        .item {
          width: calc(25% - 16px);
        }
      }
    }
  }
  @media only screen and (max-width: 835px) {
    .result-title {
      padding: 0 32px;
    }
    .no-result {
      padding: 16px 32px;
    }
    .result {
      padding: 0 32px;
    }
  }
  @media only screen and (max-width: 740px) {
    padding: 58px 0;
    .arrow-icon {
      display: none;
    }
    .input-box {
      margin: 16px;
      .input {
        height: 46px;
      font-size: 2.4rem;
      line-height: 1.2;
      padding: 4px;
      border-bottom: none;
      width: 100%;
      }
    }
    .result-title {
      padding: 0 16px;
    }
    .no-result {
      padding: 16px;
    }
    .result {
      padding: 0 16px;
    }
  }
  @media only screen and (max-width: 512px) {
    .result {
      .items {
        .item {
          width: calc(50% - 16px);
        }
      }
    }
  }
`;