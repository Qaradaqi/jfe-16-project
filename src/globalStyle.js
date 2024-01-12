import { createGlobalStyle } from "styled-components";
import { pallete } from "./theme";

const GlobalStyle = createGlobalStyle`
html {
    font-size: 10px;
}
* {
    margin: 0;
    padding: 0;
}
*, *::before, *::after {
    box-sizing: border-box;
}
body {
    direction: ltr;
    background: ${pallete.bodyBG};
    color: ${pallete.whiteColor};
    font-family: 'Sora', sans-serif;
}
a {
    text-decoration: none;
    color: ${pallete.primaryColor};
}
ul, ol {
    list-style: none;
}
.full-container {
    width: 100%;
    margin: 0 auto;
}
.flex {
    display: flex;
}
.flex-column {
    flex-direction: column;
}
.wrap {
    flex-wrap: wrap;
}
.nowrap {
    flex-wrap: nowrap;
}
.align-center {
    align-items: center;
}
.align-start {
    align-items: start;
}
.align-end {
    align-items: end;
}
.justify-center {
    justify-content: center;
}
.justify-between {
    justify-content: space-between;
}
.justify-around {
    justify-content: space-around;
}
.justify-evenly {
    justify-content: space-evenly;
}
.gap-5 {
    gap: 5px;
}
.gap-10 {
    gap: 10px;
}
.mrl-8 {
    margin: 0 8px;
}
`;

export default GlobalStyle;