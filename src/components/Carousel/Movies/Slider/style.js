import styled from "styled-components";
import { pallete } from "../../../../theme";

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
  width: 100%;
  .slider-container {
    overflow: hidden;
    position: relative;
    .items-slider {
      width: 100%;
      padding: 45px 0 45px 72px;
      transition: all 70ms ease-in-out;
      .item {
        position: relative;
        height: 366px;
        aspect-ratio: 2/3;
        &:hover {
          z-index: 2;
        }
      }
    }
    .nav-btn {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
      z-index: 5;
      .prev, .next {
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
          transition: transform .08s ease-in-out;
        }
      }
    }
  }
}
.disable {
  opacity: 0.3 !important;
}
`;