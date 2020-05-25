import React from 'react';
import donateSwishQR from "./donateSwishQR.svg";
import Styled from "styled-components";

const Wrapper = Styled.div`
	padding: 10px;
	background: ${props => props.theme.color.white};;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	width: 80%;
	`;

const donateQR = () => {
	return (
		<Wrapper>
			<img width="100%" alt=" " src={donateSwishQR} />
		</Wrapper>
	)
}

export default donateQR
