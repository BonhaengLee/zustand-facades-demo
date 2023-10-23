const { jestPathAlias } = require("./pathAlias.js");

module.exports = {
  testEnvironment: "jsdom",
  testMatch: [
    "<rootDir>/__tests__/**/*.test.js",
    "<rootDir>/__tests__/**/*.test.jsx",
  ],
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  moduleNameMapper: jestPathAlias,
};
