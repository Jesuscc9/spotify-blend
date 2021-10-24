import React from "react";
import { ImageContainer, GlobalStyles } from "./styles";

export const ProfileImage = ({ src, attract }) => {
	return (
		<>
			<GlobalStyles />
			<ImageContainer className={attract && "attracted-container"}>
				<div className="image-container">
					<img src={src} className={attract && "attracted-image"} />
				</div>
			</ImageContainer>
		</>
	)
}