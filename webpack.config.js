const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    bundle: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.css|scss$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader
          },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js|jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jpg|png|gif|woff|eot|otf|ttf|svg|mp4|webm|webmanifest$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'assets/[hash].[ext]' }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Jikkosoft',
      template: path.join(__dirname, 'public/index.html'),
      filename: './index.html'
    }),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    })
  ],
  devServer: {
    compress: true,
    historyApiFallback: true,
    liveReload: true,
    open: false,
    port: 3001
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  optimization: {
    runtimeChunk: 'single'
  }
}
