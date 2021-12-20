const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/app.tsx',
  output: {
    path: path.join(__dirname, 'server'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      'React': 'react',
      'ReactDOM': 'react-dom'
    })
  ],
  module: {
    rules: [
    {
      test: /\.s?css$/,
      use: ['style-loader','css-loader','sass-loader']
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    },
    {
      test: /\.tsx$/,
      use: 'ts-loader',
      exclude: /node_modules/
    },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'inline-source-map',
  devServer: {
    //http2: true,
    https: true,
    // https: {
    //   key: fs.readFileSync('/path/to/server.key'),
    //   cert: fs.readFileSync('/path/to/server.crt'),
    //   cacert: fs.readFileSync('/path/to/ca.pem'),
    // },
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: {
      index: '/'
    }
  }
};
