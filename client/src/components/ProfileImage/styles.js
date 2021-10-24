import styled, { createGlobalStyle, keyframes } from "styled-components";

export const StandAnim = keyframes`
	0%{
		transform: translate(0%, -10%);
	}
	
	25%{
		transform: translate(10%, 0%);
	}

	50%{
		transform: translate(0%, 0%);
	}

	75%{
		transform: translate(0%, 0%);
	}

	100%{
		transform: translate(0%, 0%);
	}
`;

const infiniteRotating = keyframes` 
  from {
    transform: rotate(360deg) translate(00%, -0%);
  }
  to {
    transform: rotate(0deg) translate(-0%, -0%);
  }
`;

const infiniteRotatingLeft = keyframes` 
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const attractedContainer = keyframes`
	from {
		/* transform: translate(-50%, -70%); */
		/* transform: rotate(100deg); */
	}
	
	to{
		/* transform: translate(-50%, -70%); */
		transform: rotate(0deg);
	}
	`;

const clipImage = keyframes`
	0%{
		clip: rect(0px,20rem,20rem,0px);
	} 50%{
		clip: rect(0px,20rem,20rem,0px);
	} 100%{
		clip: rect(0px,10rem,20rem,0px);
	}
	
	`

export const GlobalStyles = createGlobalStyle`
	.attracted-container{
		top: 30%;
		left: calc(50% - 10rem);
		align-items: center;
		/* animation: ${attractedContainer} 16s infinite linear; */
		/* transform: translate(-50%, 0%); */
		/* animation: ${infiniteRotating} 16s infinite linear; */
	}
	
	.attracted-image-right{
		clip: rect(0px,10rem,20rem,0px);
		animation: ${clipImage} 2s, ${infiniteRotatingLeft} 16s infinite linear !important;
		/* transform: rotate(0deg); */
		/* animation: none !important; */
	}

	.attracted-image-left{
		clip: rect(0px,10rem,20rem,0px);
		animation: ${clipImage} 2s, ${infiniteRotatingLeft} 16s infinite linear !important;
		/* transform: rotate(0deg); */

	}
	
	.image-container{
		width: 20rem;
		height: 20rem;
	}
	
	`;

export const ImageContainer = styled.div`
  /* transition: width 2s, transform 10s ease, top 1s ease, left 1s ease; */
  transition: all 1s;
  position: absolute;
  top: 36%;
  left: ${(props) => props.side ? "12%" : "calc(78% - 10rem)"};
  width: 20rem;
  height: 26rem;
  /* border: 1px solid white; */
  display: flex;
  justify-content: center;
  animation: ${infiniteRotating} 16s infinite linear;
  /* transform: translate(-50%, -70%); */
	
  img {
		border-radius: 50%;
    width: 20rem;
    height: 20rem;
    transition: all 0.3s;
    animation: ${infiniteRotatingLeft} 16s infinite linear;
		/* clip: rect(0px,20rem,20rem,0px); */
		transition: all 3s clip 1s;
		position: absolute;
  }
`;
