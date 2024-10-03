const path = require('path');

module.exports = {
  entry: './dist/appointment-lib/fesm2022/appointment-lib.mjs', // Adjust the path to your compiled library
  output: {
    path: path.resolve(__dirname, 'dist-bundle'),
    filename: 'appointment-lib.bundle.js',
    library: 'MyLib', // This defines the global object
    libraryTarget: 'umd', // UMD to support various module systems and global scope
    umdNamedDefine: true, // Name the AMD module, helpful in global contexts
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
