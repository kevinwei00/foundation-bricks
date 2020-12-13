const path = require('path');

module.exports = {
  entry: {
    app: './index.js'
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
					{ loader: 'css-loader', options: { modules: true } },
					{ loader: 'sass-loader' }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.css', '.scss', '.js', '.jsx']
  }
};