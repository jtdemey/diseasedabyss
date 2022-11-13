import nodePolyfills from "rollup-plugin-polyfill-node";

export default {
  input: "src/server.js",
  output: {
    file: "dist/server.js",
    format: "cjs"
  },
  plugins: [
    nodePolyfills()
  ]
};
