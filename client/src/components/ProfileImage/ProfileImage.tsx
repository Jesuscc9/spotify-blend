import { ImageContainer, GlobalStyles } from "./styles";
import { useSelector } from "react-redux"
import { RootStateType } from "../../store";
import { motion } from "framer-motion";
interface ProfileImageProps {
	src: string,
	side: boolean,
	index: number,
}

export const ProfileImage = ({ src, side, index }: ProfileImageProps) => {
	
	const roomStatus = useSelector((state: RootStateType) => state.room.status)

	return (
		<>
			<GlobalStyles />
			<ImageContainer className={roomStatus === "blending" ? "attracted-container" : ""} side={side}>
				<motion.div className={`image-container ${roomStatus === "blending" ? "attracted-image-container" : ""}`} layoutId={`user-image-container-${index}`}>
					<img title="User image" alt="clairo" src={src} className={roomStatus === "blending" ? `attracted-image-${side ? "left" : "right"}` : ""} />
				</motion.div>
			</ImageContainer>
		</>
	)
}