import React from 'react';
import Styled from "styled-components";

const Component = Styled.div`
  background: ${props => props.theme.color.white};;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.color.black};;
`;

const Wrapper = Styled.div`
  box-sizing: border-box;
  max-width: 600px;
  padding: 10px 50px 0 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  @media screen and (max-width: 700px) {
    max-width: 100vw;
    width: 100vw;
    padding: 10px 20px;
  }
`;
const Title = Styled.h1`
  width: 600px;
  display: flex;
  justify-content: center;
  font-size: 3rem;
  @media screen and (max-width: 700px) {
    max-width: 100vw;
    width: 100vw;
  }
`;

const Content = Styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;
const Footer = Styled.div`
  border-radius: 5px;
  margin-bottom: 10px;
  background: ${props => props.theme.color.black};;
  padding: 20px;
  color: ${props => props.theme.color.white};;

  a {
    color: ${props => props.theme.color.orange};;
    text-decoration: none;
    &:hover { 
      color: ${props => props.theme.color.orange}80;;
    }
  }
`;

const BaseComponent = (props) => {
  return (
    <Component>
      <Wrapper>
        <Title>{props.title ? props.title : "Kö.app"}</Title>
        <Content>{props.children}</Content>
        <Footer>Byggs och underhålls av Oscar Nilsson - <a href="https://osuka.dev" rel="noopener noreferrer" target="_blank">Osuka.dev</a></Footer>
      </Wrapper>
    </Component>
  )
}

export default BaseComponent
