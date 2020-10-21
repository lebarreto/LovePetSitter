require("@babel/register")({
  presets: ["@babel/preset-env"],
  plugins: [
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-runtime",
  ],
});

// Import the rest of our application.
module.exports = require("./src/server.js");
