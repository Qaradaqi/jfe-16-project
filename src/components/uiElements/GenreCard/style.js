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
    border-radius: 6px;
    transition: transform .08s ease-in-out;
    position: relative;
    .card-frame {
      position: absolute;
      width: calc(100% + 24px);
      height: calc(100% + 24px);
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
        width: calc(100% - 42px);
        height: calc(100% - 55px);
        top: 23px;
        left: 20px;
        border-radius: 12px;
        pointer-events: none;
        filter: drop-shadow(0 0 72px rgba(255,96,28,.3));
        background: ${pallete.primaryColor};
        opacity: 0;
        transition: opacity .08s ease-in-out;
      }
    }
    .card-poster {
      position: relative;
      width: 161.667px;
      height: 93px;
      z-index: 2;
      transform: scale(1.02);
      background-image: url('/asset/image/genres-card-background.png');
      background-size: 600%;
      transition: all .08s ease-in-out;
      z-index: 1;
      padding: 16px;
      color: ${pallete.whiteColor};
      border-radius: ${pallete.defaultRadius};
      font-size: 1.8rem;
      font-weight: 600;
      overflow: hidden;
      text-overflow: ellipsis;
      box-shadow: inset 0 0 0 1px ${pallete.darkBorder};
      &.item-0 {
        background-position: 0 top;
      }
      &.item-1 {
        background-position: -100% top;
      }
      &.item-2 {
        background-position: -200% top;
      }
      &.item-3 {
        background-position: -300% top;
      }
      &.item-4 {
        background-position: -400% top;
      }
      &.item-5 {
        background-position: -500% top;
      }
    }
    }
  }
  &:hover {
    &.card {
      z-index: 2 !important;
      .card-content {
        transition: transform .08s ease-in-out;
        transform: scale(1);
        .card-frame {
          top: -12.5px;
          left: -12.5px;
          width: calc(100% + 25px);
          height: calc(100% + 25px);
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
          border: 2px solid ${pallete.primaryColor};
          }
        }
      }
    }
  }
}
`;