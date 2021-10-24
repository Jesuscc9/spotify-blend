import React from "react";
import { ImageContainer, GlobalStyles } from "./styles";

export const ProfileImage = ({ src, attract, side }) => {
	console.log(side)
	return (
		<>
			<GlobalStyles />
			<ImageContainer className={attract && "attracted-containers"} side={side}>
				<div className="image-container">
					<img src={src} className={attract && `attracted-image-${side ? "left" : "right"}`} />
				</div>
			</ImageContainer>
		</>
	)
}