const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
					{ loader: 'css-loader', options: { modules: true } },
					{ loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
  resolve: {
    extensions: ['.css', '.scss', '.js', '.jsx']
  }
};