const path = require('path');

module.exports = () => ({
  entry: './index.tsx',
  output: {},
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
      }
    ],
  },
});
