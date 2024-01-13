import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
background: ${pallete.footerBG};
padding: 72px 0 16px 0;
margin-top: 40px;
.copyright {
  font-size: 1.2rem;
  margin-top: 100px;
  font-weight: 400;
  color: ${pallete.boneColor};
  text-align: center;
  padding: 0 16px;
}
.active {
  display: block;
}
.deactive {
  display: none;
}
.second-social {
  margin-top: 75px;
}
.responsive-item {
  border-bottom: 1px solid ${pallete.darkBorder};
  width: calc(100% - 15px);
  padding-bottom: 15px;
  margin-bottom: 10px;
  margin-left: 15px;
}
`;