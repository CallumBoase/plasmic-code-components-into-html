const path = require('path');

module.exports = {
  mode: 'production', // Use 'production' for production builds
  entry: './components-export.js', // Adjust this to your entry file
  output: {
    path: path.resolve(__dirname, 'public'), // Output directly to the public directory
    filename: 'components-bundle.js', // Name of the output bundle
    library: 'MyNextComponents',
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        },
      },
      // Include other rules as necessary
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
