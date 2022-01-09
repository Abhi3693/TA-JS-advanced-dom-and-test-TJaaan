module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    quotes: [0, "double"],
    "no-console": "off",
    "no-unused-vars": [
      "off",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
  },
};
