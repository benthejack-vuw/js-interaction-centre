const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [path.join(__dirname, "src/interactionCentre.ts")],
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: 'interactionCentre.bundle.js',
    library: 'interactionCentre',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: [".js", ".ts"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader:"babel-loader",
            options: { presets: [ [ 'es2015', { modules: false } ] ] }
          },
         {
           loader: 'ts-loader'
         }
       ]

      }
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
