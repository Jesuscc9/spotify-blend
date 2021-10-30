import styled, { createGlobalStyle, keyframes } from "styled-components";

interface StyleProps {
	side: boolean,
}

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
		width: 20rem;
		overflow: hidden;
	}
	
	to{
		width: 10rem;
		overflow: hidden;
	}
`;

export const GlobalStyles = createGlobalStyle`
	.attracted-container{
		top: 30%;
		left: calc(50% - 10rem);
		justify-content: left;
		align-items: center;
		border: 1px solid;
		animation: none;
}

	.attracted-image-container{
		width: 10rem;
		overflow: hidden;
		animation: ${attractedContainer} 3s !important;
		animation-fill-mode: forwards !important;
	}
	
	.attracted-image-right{
		/* animation: ${infiniteRotatingLeft} 16s infinite linear !important; */
		animation: none !important;
	}
	
	.attracted-image-left{
		/* animation: ${infiniteRotatingLeft} 16s infinite linear !important; */
		transform: rotate(180deg);
		animation: none !important;
	}
	
	.image-container{
		width: 20rem;
		height: 20rem;
	}
`;

export const ImageContainer = styled.div<StyleProps>`
  transition: all 1s;
  position: absolute;
  top: 36%;
  left: ${(props) => props.side ? "12%" : "calc(78% - 10rem)"};
  transform: ${(props) => props.side ? "rotate(180deg)" : "rotate(0deg)"};
  width: 20rem;
  height: 26rem;
  display: flex;
  justify-content: center;
  animation: ${infiniteRotating} 16s infinite linear;
	
  img {
		border-radius: 50%;
    width: 20rem;
    height: 20rem;
    min-width: 20rem;
    min-height: 20rem;
    animation: ${infiniteRotatingLeft} 16s infinite linear;
		transition: all 3s;
  }
`;
