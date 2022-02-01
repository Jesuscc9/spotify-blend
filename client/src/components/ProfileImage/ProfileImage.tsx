import { ImageContainer, GlobalStyles } from "./styles";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";
import { motion } from "framer-motion";
import React, { createRef, useEffect, useRef } from "react";
import { getCurrentRotation } from "../../helpers";
interface ProfileImageProps {
  src: string;
  side: boolean;
  index: number;
}

export const ProfileImage = ({ src, side, index }: ProfileImageProps) => {
  const roomStatus = useSelector((state: RootStateType) => state.room.status);

  const imageContainerRef = useRef(document.createElement("div"));
  const imageRef = useRef(document.createElement("img"));

  useEffect(() => {
    const fn = async () => {
      const deg: number = getCurrentRotation(imageContainerRef.current);

      imageContainerRef.current.style.animation = "none";
      imageContainerRef.current.style.height = "20rem";
      imageContainerRef.current.style.transform = `rotate(${deg}deg)`;

      await new Promise((resolve) => setTimeout(resolve, 10));

      await new Promise((resolve) => setTimeout(resolve, 10));

      imageContainerRef.current.style.transform = `rotate(${side ? "0" : "180"}deg)`;
    };

    const fn2 = async () => {
      const deg: number = getCurrentRotation(imageRef.current);

      imageRef.current.style.animation = "none";
      imageRef.current.style.transform = `rotate(${deg}deg)`;

      await new Promise((resolve) => setTimeout(resolve, 10));

      await new Promise((resolve) => setTimeout(resolve, 10));

      imageRef.current.style.transform = `rotate(${side ? "0" : "180"}deg)`;
    }

    if (roomStatus == "blending") {
      fn();
      fn2();
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
          <img alt="hola" ref={imageRef} src={src} className="" />
        </motion.div>
      </ImageContainer>
    </>
  );
};
