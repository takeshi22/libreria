const path = require("path");
const outputPath = path.resolve(__dirname, "src/views/public");
const MODE = "development";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
  mode: MODE,
  entry: "./src/views/index.tsx",
  output: {
    filename: "bundle.js",
    path: __dirname + "/src/views/public",
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"],
  },

  devServer: {
    host: "0.0.0.0",
    port: 2525,
    contentBase: outputPath,
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
      {
        test: /\.scss?$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 2,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: enabledSourceMap,
            },
          },
        ],
      },
    ],
  },
};
