import React from 'react';
import Styled from "styled-components";
import { Scroll, Frame } from "framer";
import { motion } from "framer-motion";
import { FiLogIn } from "react-icons/fi";

const FrameContent = Styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  box-sizing: border-box;
  align-items: center;
`;

const JoinButton = Styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5rem;
  padding: 0 1rem;
  height: 100%;
`;

const Store = Styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;

const Name = Styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.color.black};;
`;
const City = Styled.div`
  text-transform: uppercase;
  color: ${props => props.theme.color.blue};;
  opacity: 0.8;
`;


const SelectList = (props) => {
  return (
    <Scroll height={"350px"} width={"100%"} position={"relative"}>
      {
        props.items && props.items.map((x, i) => {
          return <Frame background={i % 2 ? "transparent" : "#3C91E610"} height={"80px"} width={"100%"}>
            <FrameContent>
              <Store>
                <Name>{x.namn}</Name>
                <City>{x.stad}</City>
              </Store>
              <JoinButton onClick={() => props.handleRedirect(x.namn)} whileTap={{ scale: 0.8 }} whileHover={{ scale: 0.9 }}>
                <FiLogIn style={{ color: "#3C91E6" }} />
              </JoinButton>
            </FrameContent>
          </Frame>
        })
      }
    </Scroll>
  )
}

export default SelectList
