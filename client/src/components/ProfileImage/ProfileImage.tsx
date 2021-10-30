import { ImageContainer, GlobalStyles } from "./styles";
import { useSelector } from "react-redux"
import { RootStateType } from "../../store";
interface ProfileImageProps {
	src: string,
	side: boolean,
}

export const ProfileImage = ({ src, side }: ProfileImageProps) => {
	
	const roomStatus = useSelector((state: RootStateType) => state.room.status)

	return (
		<>
			<GlobalStyles />
			<ImageContainer className={roomStatus == "blending" ? "attracted-container" : ""} side={side}>
				<div className={`image-container ${roomStatus == "blending" ? "attracted-image-container" : ""}`}>
					<img title="User image" src={src} className={roomStatus == "blending" ? `attracted-image-${side ? "left" : "right"}` : ""} />
				</div>
			</ImageContainer>
		</>
	)
}