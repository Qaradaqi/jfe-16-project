import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
padding: 0 72px;
margin-bottom: 20px; 
position: relative;
z-index: 2;
.title {
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 1.5;
  color: ${pallete.boneColor};
  border-bottom: 1px solid ${pallete.darkBorder};
  padding-bottom: 16px;
  margin: 50px 0 8px 0;
}
.suggest-list {
  margin-bottom: 20px; 
  width: 100%;
  .suggest-item {
    width: calc(16.67% - 17px);
    max-height: 320px;
    aspect-ratio: 2/3;
    position: relative;
    margin: 8px;
    &:hover {
      z-index: 2;
    } 
  }
}
@media only screen and (max-width: 1366px) {
  padding: 0 48px;
}
@media only screen and (max-width: 1024px) {
  padding: 0 40px;
  .suggest-list {
    .suggest-item {
      width: calc(20% - 17px);
    }
  }
}
@media only screen and (max-width: 850px) {
  padding: 0 32px;
  .suggest-list {
    .suggest-item {
      width: calc(25% - 17px);
    }
  }
}
@media only screen and (max-width: 740px) {
  padding: 0 16px;
  .title {
    font-size: 1.6rem;
    line-height: 1.05;
    width: 100%;
    border-bottom: 0;
    margin: 16px 0 0;
  }
  .suggest-list {
    flex-wrap: nowrap;
    overflow-x: scroll; 
    padding: 25px 0 35px;
    margin-bottom: 15px;
    width: calc(100% + 24px);
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    .suggest-item {
      width: calc(40% - 17px);
      flex-shrink: 0;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
@media only screen and (max-width: 512px) {
  .suggest-list {
    margin-left: -16px;
    padding-left: 8px;
    width: calc(100% + 32px);
  }
}
`;