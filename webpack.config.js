const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path')

const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  });

  const outputPath = `${__dirname}/dist`;

module.exports = () => {
    return {
        entry: ['./src/index.js','./src/css/index.scss'],
        resolve: {
            extensions: [".ts", ".tsx", ".js"]
          },
        module: {
            noParse: [/.*(pixi\.js).*/],
            rules: [
              { test: /\.tsx?$/, loader: "ts-loader" },
              {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
              {test: /\.css$/, use: ['style-loader', 'css-loader']},
              {
                test: /\.scss$/,
                use: [
                  'style-loader',
                  'css-loader',
                  'sass-loader'
                ],
              },
            ]
        },
        plugins: [htmlPlugin]
    }   
  };