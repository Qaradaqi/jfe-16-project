import styled from "styled-components";
import { pallete } from "../../../theme";

export const Style = styled.div`
display: flex;
align-items: center;
justify-content: center;
background: none;
border: none;
height: ${(props)=>(props.size==='medium' && '40px')};
height: ${(props)=>(props.size==='large' && '56px')};
.btn-content {
  color: ${(props) => (props.type === 'default' && pallete.boneColor)};
  color: ${(props) => (props.type === 'primary' && pallete.darkColor)};
  color: ${(props) => (props.type === 'dark' && pallete.primaryColor)};
  opacity: ${(props) => (props.type === 'default' && '0.7')};
  height: ${(props) => (props.size === 'medium' && '32px')};
  height: ${(props) => (props.size === 'large' && '48px')};
  border-radius: ${pallete.defaultRadius};
  background: ${(props) => (props.type === 'primary' && pallete.primaryColor)};
  background: ${(props) => (props.type === 'dark' && pallete.darkBackground)};
  border: ${(props) => (props.type !== 'dark' && '2px solid #0000')};
  border: ${(props) => (props.type === 'dark' && `2px solid ${pallete.darkBorder}`)};
  font-style: normal;
  width: calc(100% - 8px);
  font-weight: ${(props) => (props.type === 'default' && '400')};
  font-weight: ${(props) => (props.type !== 'default' && '600')};
  font-weight: ${(props) => (props.size === 'large' && '700')};
  font-size: ${(props) => (props.type === 'default' && '1.6rem')};
  font-size: ${(props) => (props.type !== 'default' && '1.4rem')};
  font-size: ${(props) => (props.size === 'large' && '1.6rem')};
  line-height: ${(props) => (props.type === 'default' && '1.6rem')};
  line-height: ${(props) => (props.type !== 'default' && '1.4rem')};
  padding: ${(props) => (props.type === 'default' && '6px 10px')};
  padding: ${(props) => (props.type !== 'default' && '7px 10px')};
  padding: ${(props) => (props.size === 'large' && '12px 14px')};
  margin: 0; 
  min-height: 18px;
  transition: all 0.07s ease-in-out;
  white-space: nowrap;
  &:hover {
    border: ${(props)=>(props.type==='default' && `2px solid ${pallete.darkBorder}`)};
    border: ${(props)=>(props.type==='dark' && `2px solid ${pallete.primaryColor}`)};
    background: ${(props)=>(props.type==='dark' && `${pallete.darkHoverBG}`)};
    width: 100%;
    height: 100%;
    backdrop-filter: blur(8px);
  }
}
`;