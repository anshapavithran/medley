import Particles from "@tsparticles/react";

export default function Background() {
  return (
    <Particles
      options={{
        background: {
          color: "#000",
        },
        particles: {
          number: {
            value: 120,
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
          },
          move: {
            enable: true,
            speed: 2,
          },
          color: {
            value: ["#ff00ff", "#00ffff", "#ffff00"],
          },
        },
      }}
    />
  );
}