const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'html2image.js',
    path: path.resolve(__dirname, 'dist'),
  }
};