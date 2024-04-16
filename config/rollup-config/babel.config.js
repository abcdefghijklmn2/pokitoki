module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: '>0.2%, not dead, not op_mini all',
      },
    ],
    /**
     * Will use the native built-in instead of trying to polyfill behavior for any plugins that require one.
     * Remove the helper function for Object.assign.
     * @see https://babeljs.io/docs/babel-preset-react#usebuiltins
     */
    ['@babel/preset-react', { useBuiltIns: true }],
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
  ],
}