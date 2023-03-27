import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { Configuration } from 'webpack';

export default {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  '@babel/preset-react',
                  '@babel/preset-env'
                ],
                plugins: [
                  '@babel/plugin-proposal-class-properties'
                ]
              }
            }
          }
        ]
      },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
} as Configuration;