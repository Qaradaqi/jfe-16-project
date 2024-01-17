import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
padding: 105px 0;
margin-bottom: 100px;
min-height: 100vh;
.content {
  position: relative;
  padding: 0 72px;
  .left-sidebar {
    border: 1px solid ${pallete.darkBorder};
    border-radius: ${pallete.defaultRadius};
    padding: 5px 5px 5px 0;
    position: sticky;
    background: ${pallete.darkColor};
    top: 0;
    width: 242px;
    overflow-y: auto;
    height: 100vh;
    .left-sidebar-menu {
      .sidebar-items {
        padding: 28px 16px;
        .sidebar-item {
          font-weight: 400;
          font-size: 1.6rem;
          line-height: 1.25;
          opacity: 0.7;
          color: ${pallete.boneColor};
          white-space: nowrap;
          padding: 8px;
          width: 100%;
          cursor: pointer;
          border: 2px solid #0000;
          &:hover {
            border-radius: ${pallete.defaultRadius};
            opacity: 1;
            background: ${pallete.darkHoverBG};
            box-shadow: 0 0 0 2px ${pallete.darkBorder};
            backdrop-filter: blur(8px);
          }
          &.selected {
            font-weight: 700;
            opacity: 1;
            background: ${pallete.darkHoverBG};
            backdrop-filter: blur(8px);
          }
        }
      }
    }
    &:after {
      top: 5px;
      background: linear-gradient(0deg,#14141400,#141414);
    }
  }
  .category-menu {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 15;
    border-radius: ${pallete.defaultRadius};
    backdrop-filter: blur(16px);
    background: #0d0d0de6;
    padding: 0 16px 32px;
    .category-close-btn {
      color: ${pallete.whiteColor};
      i {
        font-size: 2rem;
        font-weight: 800;
        margin: 15px 0;
        padding: 10px;
      }
    }
    .category-title {
      padding: 5px 0;
      font-size: 2.3rem;
      h3 {
        font-weight: 400;
        color: ${pallete.boneColor};
      }
    }
    .category-items {
      padding: 28px 16px 63px 16px;
      overflow-y: auto;
      height: 80vh;
      width: 100%;
      .category-item {
        color: ${pallete.boneColor};
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.2;
        white-space: nowrap;
        padding: 8px;
        width: 90%;
        &.selected {
          font-weight: 700;
          background: ${pallete.darkHoverBG};
        }
      }
    }
  }
  .right-content {
    width: 100%;
    min-height: 100vh;
    .items {
      width: 100%;
      margin: 0 16px;
      .movies-title {
        display: flex;
        height: 64px;
        padding: 0 24px;
        margin-bottom: 72px;
        position: sticky;
        top: 103px;
        text-transform: capitalize;
        width: 100%;
        color: ${pallete.whiteColor};
        z-index: 5;
        top: 103px;
        .title-h {
          font-weight: 700;
          font-size: 5.6rem;;
          line-height: 1.2;
          color: ${pallete.whiteColor};
        }
        .responsive-menu-btn {
          background-color: #15151540;
          border: 1px solid ${pallete.darkBorder};
          color: ${pallete.primaryColor};
          font-weight: 700;
          font-size: 1.6rem;
          padding: 0 12px;
          height: 48px;
          line-height: 1.25;
          border-radius: ${pallete.defaultRadius};
          width: fit-content;
          display: none;
          i {
            font-weight: 800;
            font-size: 2.8rem;
          }
        }
        .title-sort {
          margin-left: 24px;
          .sort-btn {
            background-color: ${pallete.darkColor};
            border: 1px solid ${pallete.darkBorder};
            font-size: 1.6rem;
            font-weight: 700;
            padding: 0 12px;
            height: 48px;
            border-radius: ${pallete.defaultRadius};
            width: fit-content;
            white-space: nowrap;
            line-height: 1.5;
            cursor: pointer;
            &:hover {
              border-color: ${pallete.whiteColor}; 
            }
          }
          .sort-menu {
            width: 273px;
            border-radius: ${pallete.defaultRadius};
            padding: 32px;
            backdrop-filter: blur(16px);
            background: #0d0d0de6;
            border: 1px solid ${pallete.darkBorder};
            transition: opacity .08s ease-in-out;
            opacity: 1;
            pointer-events: auto;
            .sort-menu-close-btn {
              color: ${pallete.whiteColor};
              display: none;
              i {
                font-size: 2rem;
                font-weight: 800;
                margin: 15px 0 32px 0;
                padding: 10px;
              }
            }
            .sort-menu-title {
              font-weight: 400;
              font-size: 2.4rem;
              line-height: 1.2;
              color: ${pallete.boneColor};
              margin-top: 0;
            }
            .sort-menu-items {
              .sort-menu-item {
                font-weight: 400;
                font-size: 1.6rem;
                line-height: 1.0;
                color: ${pallete.boneColor};
                white-space: nowrap;
                padding: 0 12px;
                width: 100%;
                height: 40px;
                cursor: pointer;
                border: 2px solid #0000;
                &:hover {
                  border: 2px solid ${pallete.boneColor};
                  border-radius: ${pallete.defaultRadius};
                }
                &.selected {
                  color: ${pallete.primaryColor};
                }
              }
            }
          }
        }
        &::before {
          height: 240px;
          display: block;
          position: absolute;
          content: "";
          top: -103px;
          left: 0;
          z-index: -1;
          width: 100%;
          background: linear-gradient(1turn,#0d0d0d00,#0d0d0d80 53.31%,#0d0d0d 96.86%);
        }
      }
      .item {
        position: relative;
        z-ndex: 1;
        width: calc(20% - 16px);
        margin: 5px;
        aspect-ratio: 2/3;
        &:hover {
          z-index: 2;
        }
      }
    }
  }
}
@media only screen and (max-width: 1366px) {
  .content {
    padding: 0 48px;
  }
}
@media only screen and (max-width: 1024px) {
  .content {
    padding: 0 40px;
    .right-content {
      .items {
        .item {
          width: calc(25% - 16px);
        }
        .movies-title {
          align-items: center;
          padding: 0;
          margin-bottom: 12px;
          height: unset;
          .title-h {
            font-size: 3.2rem;
            line-height: 1;
          }
        }
      } 
    }
  }
}
@media only screen and (max-width: 835px) {
  .content {
    padding: 0 32px;
    .category-menu {
      display: flex;
    }
    .left-sidebar {
      display: none;
    }
    .right-content {
      .items {
        margin: 0;
        .movies-title {
          position: static;
          .responsive-menu-btn {
            display: flex;
          }
          .title-sort {
            position: fixed;
            top: auto;
            bottom: 40px;
            right: 51px;
            z-index: 5;
            .sort-menu {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: 5;
              border-radius: ${pallete.defaultRadius};
              backdrop-filter: blur(16px);
              background: #0d0d0de6;
              padding: 72px 16px 32px;
              .sort-menu-close-btn {
                display: flex;
              }
              .sort-menu-title {
                padding: 5px 0;
                font-size: 2.3rem;
                h3 {
                  font-weight: 400;
                }
              }
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 740px) {
  .content {
    padding: 0 16px;
    .right-content {
      .items {
        .movies-title {
          flex-direction: column;
          align-items: start;
          justify-content: start;
          .title-h {
            margin-bottom: 16px;
            width: 100%;
          }
          .responsive-menu-btn {
            width: 98%;
            margin-left: 1%;
            align-items: center;
            justify-content: space-between;
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 512px) {
  .content {
    .right-content {
      .items {
        .item {
          width: calc(50% - 16px);
        }
      }
    }
  }
}
`;