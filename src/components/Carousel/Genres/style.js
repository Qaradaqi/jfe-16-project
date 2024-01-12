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