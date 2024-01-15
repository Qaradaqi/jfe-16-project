import styled from "styled-components";
import { pallete } from '../../theme';

export const Style = styled.div`
// min-height: calc(100vh - 240px);
// width: 100%;
&.loader {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid ${pallete.primaryColor};
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

&::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border-bottom: 4px solid ${pallete.primaryColor};
  border-left: 4px solid transparent;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 
`;
