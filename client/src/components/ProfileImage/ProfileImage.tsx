import { ImageContainer, GlobalStyles } from "./styles";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import { motion } from "framer-motion";
import { createRef, useEffect, useRef } from "react";
import { getCurrentRotation } from "../../helpers";
interface ProfileImageProps {
  src: string;
  side: boolean;
  index: number;
}

export const ProfileImage = ({ src, side, index }: ProfileImageProps) => {
  const roomStatus = useSelector((state: RootStateType) => state.room.status);

  const imageContainerRef = useRef(document.createElement("div"));

  useEffect(() => {
    const fn = async () => {
      console.log(imageContainerRef);
      const deg: number = getCurrentRotation(imageContainerRef.current);

      imageContainerRef.current.style.animation = "none";
      imageContainerRef.current.style.transform = `rotate(${deg}deg)`;

      await new Promise((resolve, reject) => setTimeout(resolve, 10));

      console.log(imageContainerRef.current.style.transform);
      await new Promise((resolve, reject) => setTimeout(resolve, 10));

      imageContainerRef.current.style.transform = `rotate(0deg)`;
      console.log(imageContainerRef.current.style.transform);
    };

    if (roomStatus == "blending") {
      fn();
    }
  }, [roomStatus]);

  return (
    <>
      <GlobalStyles />
      <ImageContainer
        className=""
        side={side}
        blending={roomStatus == "blending"}
        ref={imageContainerRef}
      >
        <motion.div
          className={`image-container`}
          layoutId={`user-image-container-${index}`}
        >
          <img alt="hola" src={src} className="" />
        </motion.div>
      </ImageContainer>
    </>
  );
};
