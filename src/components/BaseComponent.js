import React from 'react';
import Styled from "styled-components";
import DonateQR from "./donateQR";

const Component = Styled.div`
  background: ${props => props.theme.color.white};;
  width: 100vw;
  max-width: 100vw;
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${props => props.theme.color.black};;
`;

const Wrapper = Styled.div`
  box-sizing: border-box;
  max-width: 600px;
  padding: 0px 50px 0 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  @media screen and (max-width: 700px) {
    max-width: 100vw;
    width: 100vw;
    padding: 0px 20px 10px 20px;
  }
`;
const Title = Styled.h1`
  width: 600px;
  display: flex;
  justify-content: center;
  font-size: 3rem;
  color: ${props => props.theme.color["white"]};;
  margin: 0;
  padding: 1rem;
  background: ${props => props.theme.color[props.color]};;
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
  display: flex; 
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  
  margin: 0 5px 5px 5px;
  box-sizing: border-box;
  background: ${props => props.theme.color.black};;
  padding: 20px;
  color: ${props => props.theme.color.white};;
  justify-content: center;
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
        <Title color="blue">{props.title ? props.title : "Kö.app"}</Title>
        <Content>{props.children}</Content>
        <Footer>
            <b>Vill du stödja projektet?</b>Scanna QR-koden och swisha valfri summa märkt "Donation Kö.app" för hjälpa till att täcka serverkostnaderna!<br /><br />
          <DonateQR />
          <br />
            Byggs och underhålls idéellt av:<br /><a href="https://osuka.dev" rel="noopener noreferrer" target="_blank">https://osuka.dev</a>
        </Footer>
      </Wrapper>
    </Component>
  )
}

export default BaseComponent
