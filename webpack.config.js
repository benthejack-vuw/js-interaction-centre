const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: ["babel-polyfill", path.join(__dirname, "src/interaction_centre.ts")],
  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "interaction_centre.min.js"
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
        {
          loader:"babel-loader",
          options:{
            presets:"es2015"
          }
        },
        { 
          loader:"ts-loader"
        }]

      },
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code: true,
        warnings: false
      }
    })
  ]
};
