const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  target: "node",
  devtool: "source-map",
  entry: {
    server: path.join(process.cwd(), "src/server.js")
  },
  mode: "production",
  output: {
    filename: "server.cjs",
    environment: {
      dynamicImport: true,
      module: true
    },
    path: path.join(process.cwd(), "dist")
  },
  externals: [nodeExternals()]
};
