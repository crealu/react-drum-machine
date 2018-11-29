const path = require("path");
const webpack = require("webpack");

module.exports = {
  // tell Webpack where our aplpication starts and where to start building files
  entry: "./src/index.js",

  // tell Webpack we're working in a development environment
  mode: "development",

  // define how exported javascript modules are transformed and which are included
  module: {
    rules: [
      {
        // test and exclude to match files against
        test: /\.(js|jsx)$/,
        exclude: /Inode_modules|bower_components)/,

        // direct Webpack to use babel in file tranformation
        loader: "babel-loader",

        // specify that we want to use preset
        options: { presets: ["@babel/env"] }
      },
      {
        // describe how to process CSS using style-loader and css-loader
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  // allows us to import modules without needing to add thier extensions
  resolve: { extensions: ["*", ".js", ".jsx"] },

  // tells Webpack where to put our bundled code
  output: {
    path: path.resolve(__dirname, "dist/"),

    // publicPath tells the webpack-dev-server where to serve files from and
    // what directory the bundle should go in
    publicPath: "/dist/",
    filename: "bundle.js"
  },

  // setup webpack-dev-server to declare at which port we will be running our server
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,

    // this publicPath property tells the server where our bundle code actually is
    publicPath: "http://localhost:3000/dist/",

    // use Hot Module Replacement so we don't need to constantly refresh our page to see changes
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
