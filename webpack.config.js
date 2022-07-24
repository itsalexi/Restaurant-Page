const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js",
    pageLoad: "./src/pageLoad.js",
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
