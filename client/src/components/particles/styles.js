import styled, { createGlobalStyle, keyframes } from "styled-components";

const fadeAnim = keyframes`
	0%{
		opacity: 0.05;
	}
	100%{
		opacity: 0.2;
	}
`;

const attractedParticle = keyframes`
	0%{

	}
	50%{
		top: 75% !important;
		left: 75% !important;
	}

	99%{
		top: 100% !important;
		left: 100% !important;
	}

	100%{
		display: none;
	}
`;

const infiniteRotatingRight = keyframes` 
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
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

export const GlobalStyles = createGlobalStyle`

	body{
		overflow: hidden !important;
	}

	.particle-container{
		transition: width 2s, transform 10s ease, top 1s ease, left 1s ease;
	}

	.particlesContainer{
		z-index: -1000;
	}

	.particle {
		animation: ${fadeAnim} 2s infinite alternate;
		transition: all 2s;
	}

	.particle-attracted{
		position: absolute;
		animation: ${attractedParticle} 4s;
	}

	.particle-container-rotate-left{
		animation: ${infiniteRotatingLeft} 20s infinite linear;
	}

	.particle-container-rotate-right{
		animation: ${infiniteRotatingRight} 20s infinite linear;
	}

`;
