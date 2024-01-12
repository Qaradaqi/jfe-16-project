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
  .suggest-item {
    width: calc(16.67% - 8px);
    height: 320px;
    padding: 5px;
    position: relative;
    &:hover {
      z-index: 2;
    } 
  }
}
`;