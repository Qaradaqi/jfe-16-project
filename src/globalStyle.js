import { createGlobalStyle } from "styled-components";
import { pallete } from "./theme";

const GlobalStyle = createGlobalStyle`
html {
    font-size: 10px;
    scroll-behavior: smooth;
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
    -webkit-font-smoothing: antialiased;
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
.justify-end {
    justify-content: end;
}
/* width */
    ::-webkit-scrollbar {
        width: 6px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 2px ${pallete.darkColor}; 
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: ${pallete.boneColor}; 
        border-radius: 3px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: ${pallete.boneColor}; 
    }
.gap-5 {
    gap: 5px;
}
.gap-10 {
    gap: 10px;
}
.gap-20 {
    gap: 20px;
}
.mrl-8 {
    margin: 0 8px;
}
`;

export default GlobalStyle;