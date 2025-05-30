const transitions = {
  goUp: {
    initial: {
      y: 16,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  },
  reveal: {
    initial: {
      filter: "blur(8px)",
      opacity: 0,
    },
    animate: {
      opacity: 1,
      filter: "blur(0px)",
    },
  },
  goDown: {
    initial: {
      y: -16,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
  },
};

export { transitions };
