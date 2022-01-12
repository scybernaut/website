const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    about: "./src/about.js",
    contact: "./src/contact.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "about.html",
      template: "src/about.html",
      chunks: ["about"],
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "src/contact.html",
      chunks: ["contact"],
    }),
    new MiniCssExtractPlugin(),
  ],
};
