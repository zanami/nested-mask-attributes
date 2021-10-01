module.exports = {
  roots: ["<rootDir>/lib"],
  testMatch: ["**/?(*.)+(spec|test).+(ts|tsx|js)"],
  collectCoverageFrom: [
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
    "!**/node_modules/**",
  ],
  verbose: true,
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
