const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './index.html',
  filename: './index.html'
})

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]_[local]_[hash:base64]',
              sourceMap: true,
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [htmlWebpackPlugin]
}

// module.exports = {
//   entry: ['./src/index.js'],
//   output: {
//     path: __dirname,
//     publicPath: '/',
//     filename: 'bundle.js'
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader'
//         }
//       }
//     ]
//     // loaders: [
//     //   {
//     //     exclude: /node_modules/,
//     //     loader: 'babel',
//     //     query: {
//     //       presets: ['react', 'env', 'stage-1']
//     //     }
//     //   }
//     // ]
//   },
//   resolve: {
//     extensions: ['', '.js', '.jsx']
//   },
//   devServer: {
//     historyApiFallback: true,
//     contentBase: './',
//     watchOptions: {
//       aggregateTimeout: 300,
//       poll: 1000
//     }
//   }
// }
