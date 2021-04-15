export const mountComposition = (callback, options = {}) => ({
  template: '<div></div>',
  ...options.component,
  setup() {
    return callback();
  },
});
