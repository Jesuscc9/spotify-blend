import React, { useEffect, useRef } from "react";
import { animateParticles } from "./script";
import { GlobalStyles } from "./styles";

export const Particles = ({ attract }) => {

  useEffect(() => {
    const el = document.getElementById("particlesContainer");
    if (!el) return;
    animateParticles.el = el
    animateParticles.particlesCount = 120;
    animateParticles.init();
  }, [])

  if (attract) animateParticles.attract()

  return (
    <>
      <GlobalStyles />
      <div
        id="particlesContainer"
        className="w-screen h-screen absolute top-0 left-0 particlesContainer"
      ></div>
    </>
  );
};
