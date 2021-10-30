interface AnimateParticles {
  el: any,
  particlesCount: number,
  init: () => void,
  attract: () => void,
  restart: () => void,
}

export const animateParticles: AnimateParticles = {
  el: undefined,
  particlesCount: 120,
  init: () => {
    const el = animateParticles.el;
    for (let i = 0; i < animateParticles.particlesCount; i++) {
      const particleContainer = document.createElement("div");

      const particle = document.createElement("div");

      const deg = Math.floor(Math.random() * (360 - 1 + 1) + 1);

      let x = Math.floor(Math.random() * (100 - 1 + 1) + 1);
      let y = Math.floor(Math.random() * (100 - 1 + 1) + 1);

      particleContainer.style.width = "4rem";
      particleContainer.style.height = "2rem";
      particleContainer.style.top = `${x}%`;
      particleContainer.style.left = `${y}%`;
      particleContainer.style.transform = `translate(-50%, -50%) rotate(${deg}deg)`;
      particleContainer.classList.add(
        "absolute",
        "particle-container",
        `particle-container-rotate-${Math.random() > 0.5 ? "left" : "right"}`
      );

      particle.classList.add(
        "w-4",
        "h-4",
        "bg-blue-200",
        "rounded-full",
        "absolute",
        "particle",
      );

      x = Math.floor(Math.random() * (20 - 1 + 1) + 1);
      y = Math.floor(Math.random() * (20 - 1 + 1) + 1);

      particle.style.transform = "translate(-50%, -50%)"
      particle.style.left = `${x}%`;
      particle.style.top = `${50}%`;

      particleContainer.append(particle);
      el.append(particleContainer);
    }
  },
  restart: () => {
    const el = animateParticles.el;
    for (let i = 0; i < animateParticles.particlesCount; i++) {
      const particleContainer = el.children[i];
      const particle = particleContainer.children[0];

      const deg = Math.floor(Math.random() * (360 - 1 + 1) + 1);
      
      let x = Math.floor(Math.random() * (100 - 1 + 1) + 1);
      let y = Math.floor(Math.random() * (100 - 1 + 1) + 1);

      particleContainer.style.width = "4rem";
      particleContainer.style.height = "2rem";
      particleContainer.style.top = `${x}%`;
      particleContainer.style.left = `${y}%`;
      particleContainer.style.transform = `translate(-50%, -50%) rotate(${deg}deg)`;
      particleContainer.classList.add(
        "absolute",
        "particle-container",
        `particle-container-rotate-${Math.random() > 0.5 ? "left" : "right"}`
      );

      particle.classList.add(
        "w-4",
        "h-4",
        "bg-blue-200",
        "rounded-full",
        "absolute",
        "particle"
      );

      x = Math.floor(Math.random() * (20 - 1 + 1) + 1);
      y = Math.floor(Math.random() * (20 - 1 + 1) + 1);

      particle.style.transform = "translate(-50%, -50%)"
      particle.style.left = `${x}%`;
      particle.style.top = `${50}%`;
    }
  },
  attract: () => {
    const el = animateParticles.el;
    for (let i = 0; i < animateParticles.particlesCount; i++) {
      const particleContainer = el.children[i];
      const particle = particleContainer.children[0];
      particleContainer.style.top = "50%"
      particleContainer.style.left = "50%"
      particle.style.top = "50%"
      particle.style.left = "50%"
    }
  },
};