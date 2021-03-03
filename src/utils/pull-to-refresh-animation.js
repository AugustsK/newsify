const animatorMock = {
  pulling(d, opts) {},

  refreshing({ elControl, threshold }) {},

  aborting({ elControl }) {
    return new Promise((resolve) => {
      resolve();
    });
  },

  restoring({ elControl }) {
    return new Promise((resolve) => {
      resolve();
    });
  },
};

export default animatorMock;
