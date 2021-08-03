const particleConfig = {
  
    background: {
      color: {
          value: "#343a44",
      },
  },
  fpsLimit: 60,
  interactivity: {
      detectsOn: "canvas",
      events: {
          onClick: {
              enable: true,
              mode: "push",
          },
          onHover: {
              enable: true,
              mode: "repulse",
          },
          resize: true,
      },
      modes: {
          bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
          },
          push: {
              quantity: 4,
          },
          repulse: {
              distance: 200,
              duration: 0.4,
          },
      },
  },
  particles: {
      color: {
          value: "#ffffff",
      },
      links: {
          color: "#ffffff",
          distance: 150,
          enable: false,
          opacity: 0.5,
          width: 1,
      },
      collisions: {
          enable: true,
      },
      move: {
          direction: "none",
          enable: true,
          outMode: "bounce",
          random: false,
          speed: 1,
          straight: false,
      },
      number: {
          density: {
              enable: true,
              value_area: 800,
          },
          value: 80,
      },
      opacity: {
          value: 0.25,
      },
      shape: {
          type: "circle",
      },
      size: {
          random: true,
          value: 9,
      },
      twinkle: {
          lines: {
              enable: true,
              frequency: 0.005,
              opacity: 1,
              color: {
                  value: "#ffffff"
              }
          },
          particles: {
              enable: true,
              frequency: 0.007,
              opacity: 1,
              color: {
                  value: "#ffffff"
              }
          }
      }
  },
  detectRetina: true,

  }

export default particleConfig