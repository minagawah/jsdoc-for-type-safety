const path = require('path');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'area51.[name].js',
    library: ['Area51', '[name]'],
    libraryTarget: 'umd',
  },
  stats: {
    colors: true,
  },
  optimization: {
    minimize: false,
  },
  performance: {
    maxEntrypointSize: 921600, // 900 KB
    maxAssetSize: 921600, // 900 KB
  },
  resolve: {
    extensions: ['.js'],
  },
  devtool: isProd ? 'cheap-source-map' : 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.m?js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
