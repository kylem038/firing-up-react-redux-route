const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: '/node_modules/', loader: 'babel-loader' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015' },
      { test: /\.jpg$/, loader: "file-loader?name=[path][name].[ext]" },
     {
         test: /\.svg$/,
         loader: 'url-loader',
         query: { mimetype: 'image/svg' }
     },
     {
         test: /\.png$/,
         loader: 'url-loader',
         query: { mimetype: 'image/png' }
     },
      { test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.scss', '.css']
  }
};
