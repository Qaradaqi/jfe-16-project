import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
position: relative;
min-height: 450px;
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 650px;
  background-image: url(${(props)=>(props.poster)});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
}
.hero-content {
  position: relative;
  z-index: 2;
  padding: 200px 0 25px 72px;
  width: 100%;
  max-width: 700px;
  text-align: left;
  overflow: hidden;
  text-oveflow: ellipsis;
  .title {
    font-size: 5.6rem;
    font-weight: 700;
    color: ${pallete.whiteColor};
    margin-bottom: 5px;

  }
  .hero-top {
    height: 24px;
    .type {
      text-transform: uppercase;
      background: ${pallete.heroTypeBG};
      color: ${pallete.whiteColor};
      border: 1px solid ${pallete.darkBorder};
      border-radius: 3px;
      padding: 5px;
      font-size: 1rem;
      font-weight: 700;
    }
    .genres {
      font-size: 1.2rem;
      color: ${pallete.boneColor};
      font-weight: 400;
      white-space: nowrap;
    }
  }
  .btn {
    margin-top: 16px;
  }
  .plot {
    font-size: 1.4rem;
    font-weight: 400;
    color: ${pallete.whiteColor};
    margin-top: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.5;
  }
}
.spotlight {
  position: relative;
  z-index: 2;
}
&:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,#0d0d0de6,#0d0d0d00 53.51%),linear-gradient(180deg,#0d0d0d00,#0d0d0d);
  z-index: 1;
}
@media only screen and (max-width:1366px) {
  .hero-content {
    padding-left: 48px;
  }
}
@media only screen and (max-width:1024px) {
  .hero-content {
    max-width: 546px;
    padding-top: 186px;
    padding-left: 40px;
  }
}
@media only screen and (max-width:835px) {
  .hero-content {
    padding-left: 32px;
  }
}
@media only screen and (max-width: 740px) {
  .hero-content {
    padding: 186px 16px 0;
    margin-bottom: 44px;
    .title {
      font-size: 3.2rem;
      margin-bottom: 6px;
    }
    .plot-btn {
      flex-direction: column-reverse;
      .plot {
        font-size: 1.2rem;
        margin-top: 0;
      }
    }
  }
}
`;