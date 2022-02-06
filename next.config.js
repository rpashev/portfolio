const path = require("path");

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "components", "pages", "styles")],
    prependData: `@import "styles/variables.scss";`,
  },
};
