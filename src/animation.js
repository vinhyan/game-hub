export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  shown: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
};

export const popUp = {
  hidden: {
    opacity: 0,
    scale: 0.5,
  },
  shown: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.75,
    },
  },
};
