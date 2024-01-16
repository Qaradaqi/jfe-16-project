import styled from "styled-components";
import { pallete } from "../../../theme";

export const Style = styled.div`
padding: 28px 0 41px;
.title-box {
  padding: 0 72px;
  .genre-title {
    font-size: 2.4rem;
    font-weight: 700;
    color: ${pallete.boneColor};
  }
  .see-all {
    font-size: 1.6rem;
    font-weight: 700;
    color: ${pallete.primaryColor};
  }
}
.items {
  .swiper {
    width: 100%;
    height: 100%;
    padding: 21px 0 41px;
    .swiper-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
      padding-left: 72px; 
    }
    .swiper-button-prev {
      position: absolute;
      top: 38% !important;
      right: 80px;
      left: auto !important;
      transform: translateY(-50%);
      width: 65px;
      height: 65px;
      background: ${pallete.darkBackground};
      border: 1px solid ${pallete.darkBorder};
      border-radius: ${pallete.defaultRadius};
      z-index: 5;
      cursor: pointer;
      backdrop-filter: blur(8px);
      margin: 16px 12px;
      transition: transform .08s ease-in-out;
      color: ${pallete.whiteColor};
      font-size: 2.5rem;
      &:hover {
        border-color: ${pallete.whiteColor};
        border-width: 2px;
        transform: scale(1.11);
        top: 38% !important;
        right: 80px;
        left: auto !important;
        transform: translateY(-50%);
        transition: transform .08s ease-in-out;
      }
      &:after {
        font-size: 2.5rem;
        font-weight: 800;
      }
    }
    .swiper-button-next {
      position: absolute;
      top: 38% !important;
      right: 0;
      left: auto;
      transform: translateY(-50%);
      width: 65px;
      height: 65px;
      background: ${pallete.darkBackground};
      border: 1px solid ${pallete.darkBorder};
      border-radius: ${pallete.defaultRadius};
      z-index: 5;
      cursor: pointer;
      backdrop-filter: blur(8px);
      margin: 16px 12px;
      transition: transform .08s ease-in-out;
      color: ${pallete.whiteColor};
      &:hover {
        border-color: ${pallete.whiteColor};
        border-width: 2px;
        transform: scale(1.11);
        top: 38% !important;
        right: 0;
        left: auto;
        transform: translateY(-50%);
        transition: transform .08s ease-in-out;
      }
      &:after {
        font-size: 2.5rem;
        font-weight: 800;
      }
    }
  }

  .swiper-slide {
    width: 100%;
    font-size: 18px;
    background: ${pallete.whiteColor};
    color: ${pallete.darkColor};
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: 6px;
    position: relative;
    &:hover {
      z-index: 2;
    }
  }
  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
`;