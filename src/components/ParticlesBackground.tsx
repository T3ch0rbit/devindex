import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles-engine'; // Import directly from tsparticles
import type { Engine } from 'tsparticles-engine'; // Import the Engine type

const ParticlesBackground = () => {
  const particlesInit = async (main: Engine) => {
    // You can initialize the tsparticles instance (main) here, which loads the full tsparticles engine
    await loadFull(main); // This loads all tsparticles functionality
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: true, // Enable particles on full screen
          zIndex: -1,   // Ensure the particles are in the background
        },
        particles: {
          number: {
            value: 50, // Number of particles
            density: {
              enable: true,
              value_area: 800, // Particle density
            },
          },
          color: {
            value: "#00BFFF", // Particle color
          },
          shape: {
            type: "circle", // Particle shape
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
          },
        },
        detectRetina: true, // Adjust particle density based on screen size
      }}
    />
  );
};

export default ParticlesBackground;
