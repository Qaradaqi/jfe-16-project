import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
  padding: 100px 0;
  .icon {
    color: ${pallete.primaryColor};
    background: ${pallete.footerBG};
    font-size: 1.8rem;
    font-weight: 400;
    padding: 5px;
    border-radius: 50%;
    margin: 16px;
    padding: 5px;
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
      width: 25%;
      .list-item {
        .item-link {
          font-weight: 400;
          font-size: 1.6rem;
          color: ${pallete.whiteColor};
          padding: 8px;
          width: 100%;
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
      padding-left: 72px;
      width: 100%;
      .item {
        height: 275px;
        width: 18.0%;
        padding: 8px;
        &:hover {
          z-index: 2;
        }
      }
    }
  }
`;