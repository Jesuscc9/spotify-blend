import { ImageContainer, GlobalStyles } from "./styles";

interface ProfileImageProps {
	src: string,
	attract: boolean,
	side: boolean,
}

export const ProfileImage = ({ src, attract, side } : ProfileImageProps) => {
	console.log(side)
	return (
		<>
			<GlobalStyles />
			<ImageContainer className={attract ? "attracted-container" : ""} side={side}>
				<div className="image-container">
					<img src={src} className={attract ? `attracted-image-${side ? "left" : "right"}` : ""} />
				</div>
			</ImageContainer>
		</>
	)
}