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
  min-height: 300px;
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
      padding: 16px 0 10px 72px; 
    }
    .swiper-button-prev {
      position: absolute;
      top: 65% !important;
      right: 0;
      left: auto !important;
      transform: translateY(-50%);
      width: 72px;
      height: 72px;
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
        top: 65% !important;
        right: 0;
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
      top: 35% !important;
      right: 0;
      left: auto;
      transform: translateY(-50%);
      width: 72px;
      height: 72px;
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
        top: 35% !important;
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
    max-width: 244px;
    max-height: 366px;
    aspect-ratio: 2/3;
    font-size: 18px;
    background: ${pallete.whiteColor};
    color: ${pallete.darkColor};
    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-radius: ${pallete.defaultRadius};
    position: relative;
    &:hover {
      z-index: 1;
    }
  }
}
@media only screen and (max-width: 1366px) {
  .title-box {
    padding: 0 48px;
  }
  .items {
    .swiper {
      .swiper-wrapper {
        padding: 16px 0 10px 48px;
      }
      .swiper-button-prev, .swiper-button-next {
        display: none;
      }
    }
  }
}
@media only screen and (max-width: 1024px) {
  .title-box {
    padding: 0 40px;
  }
  .items {
    .swiper {
      .swiper-wrapper {
        padding: 16px 0 10px 34px;
      }
    }
  }
}
@media only screen and (max-width: 835px) {
  .title-box {
    padding: 0 32px;
  }
}
@media only screen and (max-width: 740px) {
  .title-box {
    padding: 0 16px;
    .genre-title {
      font-size: 1.6rem;
      font-weight: 700;
      color: ${pallete.boneColor};
    }
    .see-all {
      span {
        display: none;
      }
      font-size: 1.6rem;
      font-weight: 700;
      color: ${pallete.primaryColor};
    }
  }
}
@media only screen and (max-width: 600px) {
  .items {
    .swiper {
      .swiper-wrapper {
        padding: 16px 0 10px 16px;
      }
    }
  }
}
`;