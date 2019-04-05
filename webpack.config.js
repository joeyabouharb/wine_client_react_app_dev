const path = require("path");
const isDev = process.env.NODE_ENV !== "production";
module.exports = {
  resolve: {
    modules: [path.resolve("./src"), path.resolve("./node_modules")],
  },
  entry: {
    main: ["./src/index.js"],
  },
  output: {
    path: path.resolve( __dirname, "dist/bundles" ),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};