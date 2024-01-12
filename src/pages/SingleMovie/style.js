import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
  position: relative;
  min-height: 750px;
  margin-bottom: 20px;
  background: ${pallete.bodyBG}; 
  .background {
    background-image: ${(props)=>(`url(${props.poster})`)};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 863px;
    background-image: url(${(props)=>(props.poster)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .content {
    position: relative;
    z-index: 2;
    padding: 120px 0 25px 72px;
    width: 100%;
    max-width: 700px;
    text-align: left;
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
    .title {
      font-size: 5.6rem;
      font-weight: 700;
      color: ${pallete.whiteColor};
      margin-bottom: 5px;
      padding-top: 16px;
    }
    .year-runtime {
      font-size: 1.2rem;
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
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
`;