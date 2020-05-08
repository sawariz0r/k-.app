import Styled from "styled-components";

export const Button = Styled.button`
  width: 100%;
  border-radius: 5px;
  padding: 1rem 1.5rem;
  background: ${props => props.theme.color[props.color]};;
  border: none;
  outline: none;
  font-size: 1.5rem;
  color: ${props =>
    props.color === "white" ? `
    ${props.theme.color.black};;
    ` : `
    ${props.theme.color.white};;
    `}
  &:hover {
    transform: scale(1);
    cursor: pointer;
  }
`;