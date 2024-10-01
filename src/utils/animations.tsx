export const riseDownWithFade = {
  initial: {
    y: -10,
    opacity: 0,
  },
  animate: (custom: number = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
      delay: custom * 0.1,
    },
  }),
};

export const riseUpWithFade = {
  initial: {
    y: 10,
    opacity: 0,
  },
  animate: (custom: number = 0) => ({
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
      delay: custom * 0.1,
    },
  }),
};