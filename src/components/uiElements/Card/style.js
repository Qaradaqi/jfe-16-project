import styled from "styled-components";
import { pallete } from '../../../theme';

export const Style = styled.a`
&.card {
  text-decoration: none;
  position: relative;
  width: 100%;
  height: 100%;
  .card-content {
    width: 100%;
    height: 100%;
    background-color: ${pallete.heroTypeBG};
    border-radius: 6px;
    transition: transform .08s ease-in-out;
    position: relative;
    .card-frame {
      position: absolute;
      width: calc(100% + 24px);
      height: calc(100% + 42px);
      z-index: 1;
      top: -12px;
      left: -12px;
      overflow: hidden;
      padding: 16px;
      border-radius: 12px;
      transform: scale(0.94);
      transition: transform .08s ease-in-out;
      &:after {
        content: "";
        display: block;
        position: absolute;
        width: calc(100% - 32px);
        height: calc(100% - 47px);
        top: 16px;
        left: 16px;
        pointer-events: none;
        filter: drop-shadow(0 0 72px rgba(255,96,28,.3));
        background: ${pallete.primaryColor};
        opacity: 0;
        transition: opacity .08s ease-in-out;
      }
    }
    .card-poster {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      transform: scale(1);
      transition: all .08s ease-in-out;
      z-index: 1;
      .poster {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px;
      }
    }
    .card-btn {
      position: absolute;
      color: ${pallete.primaryColor};
      bottom: 20px;
      left: 50%;
      font-size: 4.8rem;
      transform: translateX(-50%);
      transition: all .08s ease-in-out;
      background: ${pallete.darkColor};
      border-radius: 50%;
      box-shadow: inset 0 0 0 2px ${pallete.primaryColor};
      cursor: pointer;
      opacity: 0;
      &:hover {
        font-size: 5.4rem;
        bottom: 17px;
      }
    }
  }
  .card-title {
    position: absolute;
    bottom: -38px;
    left: 0;
    width: 100%;
    font-size: 1.4rem;
    font-weight: 700;
    color: ${pallete.whiteColor};
    text-transform: uppercase;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    opacity: 0;
    z-index: 2;
    transition: all .08s ease-in-out;
    transform: translateY(-20px);
  }
  &:hover {
    &.card {
      z-index: 1 !important;
      .card-content {
        transition: transform .08s ease-in-out;
        transform: scale(1.06);
        .card-frame {
          top: -12px;
          left: -12px;
          transform: scale(1.0);
          backdrop-filter: blur(16px);
          transition: transform .08s ease-in-out;
          transition-delay: 0.1s;
          z-index: 2;
          &:after {
            transition: opacity .08s ease-in-out;
            transition-delay: 0s;
            opacity: 1;
          }
        }
        .card-poster {
          z-index: 2;
          .poster {
            border: 2px solid ${pallete.primaryColor};
          }
        }
        .card-btn {
          opacity: 1;
          z-index: 10;
        }
      }
      .card-title {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}
`;