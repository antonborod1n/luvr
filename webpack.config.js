const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    index_catalog: path.resolve(__dirname, './src/index_catalog.js'),
    index_product: path.resolve(__dirname, './src/index_product.js'),
    index_login: path.resolve(__dirname, './src/index_login.js'),
    index_registration1: path.resolve(__dirname, './src/index_registration1.js'),
    index_registration2: path.resolve(__dirname, './src/index_registration2.js'),
    index_registration3: path.resolve(__dirname, './src/index_registration3.js'),
    index_account: path.resolve(__dirname, './src/index_account.js'),
    index_favorites: path.resolve(__dirname, './src/index_favorites.js'),
    index_contact: path.resolve(__dirname, './src/index_contact.js'),
    index_faq: path.resolve(__dirname, './src/index_faq.js'),
    index_shopping: path.resolve(__dirname, './src/index_shopping.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack Boilerplate',
      template: path.resolve(__dirname, './src/template.html'), // шаблон
      filename: 'index.html', // название выходного файла
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/catalog.html'),
      filename: 'catalog.html',
      chunks: ['index_catalog']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/product.html'),
      filename: 'product.html',
      chunks: ['index_product']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/login.html'),
      filename: 'login.html',
      chunks: ['index_login']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/registration1.html'),
      filename: 'registration1.html',
      chunks: ['index_registration1']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/registration2.html'),
      filename: 'registration2.html',
      chunks: ['index_registration2']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/registration3.html'),
      filename: 'registration3.html',
      chunks: ['index_registration3']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/account.html'),
      filename: 'account.html',
      chunks: ['index_account']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/favorites.html'),
      filename: 'favorites.html',
      chunks: ['index_favorites']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/contact.html'),
      filename: 'contact.html',
      chunks: ['index_contact']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/cart.html'),
      filename: 'cart.html',
      chunks: ['index_cart']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/faq.html'),
      filename: 'faq.html',
      chunks: ['index_faq']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/shopping.html'),
      filename: 'shopping.html',
      chunks: ['index_shopping']
    }),
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: "src/images", to: "images"
        }
      ]
    })
  ],
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      // картинки
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      //Шрифты и svg
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
      //SCSS to CSS
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // HTML Templates with html-loader
      {
        test: /\.(html)$/,
        include: path.join(__dirname, 'src/views'),
        use: {
          loader: 'html-loader',
          options: {
            interpolate: true
          }
        }
      }
    ]
  },

  mode: 'development',
  devServer: {
    historyApiFallback: true,
    static: './dist',
    //contentBase: path.resolve(__dirname, './dist'),
    open: true, compress: true, hot: true, port: 8080,
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/].*\.js$/,
          chunks: 'all'
        }
      }
    }
  }
}