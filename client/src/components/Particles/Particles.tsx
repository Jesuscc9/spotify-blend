import { useEffect, useRef } from "react";
import { animateParticles } from "./script";
import { GlobalStyles } from "./styles";
import { useSelector } from "react-redux";
import { RootStateType } from "../../store";

export const Particles = () => {

  const roomStatus = useSelector((state: RootStateType) => state.room.status)
  const particlesContainerRef = useRef(null);

  useEffect(() => {
    if (!particlesContainerRef.current) return;
    animateParticles.el = particlesContainerRef.current
    animateParticles.init();
  }, [])

  if (roomStatus === "blending") animateParticles.attract();
  if (roomStatus === "finished") animateParticles.restart();

  return (
    <>
      <GlobalStyles />
      <div
        ref={particlesContainerRef}
        className="w-screen h-screen absolute top-0 left-0 particlesContainer"
      ></div>
    </>
  );
};
