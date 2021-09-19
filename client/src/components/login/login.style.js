import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

	button{
		display: flex;
		justify-content: space-between;
		padding: 0.6rem 0.3rem;
		
		svg{
			margin-right: 1rem;
		}
	}

	svg{
		fill: #fff;
		width: 1.6rem;
	}
`;
