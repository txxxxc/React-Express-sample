const path = require("path");
const nodeExternals = require("webpack-node-externals");


module.exports = {
  entry: "./src/index.ts",
  target: "node",
  node: {
    __dirname: false,
  },
  externals: [nodeExternals()],
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "../../dist")
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".json"],
    modules: [path.resolve(__dirname), "./node_modules"]
  }

};
