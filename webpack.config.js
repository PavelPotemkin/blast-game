const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const isDev = process.env.NODE_ENV !== "production";
const isProd = !isDev;
const port = process.env.PORT || 3000;
const distDir = path.resolve(__dirname, "dist");

module.exports = {
  entry: {
    index: path.resolve(__dirname, "src/index.ts"),
  },
  devtool: "inline-source-map",
  mode: isDev ? "development" : "production",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          name: "vendor",
          chunks: "all",
        },
      },
    },
  },
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      game: path.resolve(__dirname, "src", "game"),
      src: path.resolve(__dirname, "src"),
    },
  },
  output: {
    filename: "[name].js",
    path: distDir,
    chunkFilename: "[id].[chunkhash].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      minify: isProd,
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, "src", "assets"), to: "assets" },
      ],
    }),
  ],
};
